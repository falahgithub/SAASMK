"use client";

import * as z from 'zod'

import { useZustand } from "@/hooks/useZustand";
import { Modal } from "../modal";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import axios from 'axios';

const AddformSchema = z.object({
  name: z.string().min(1),
  // releaseDate: z.string(),
  releaseDate: z.preprocess((arg) => {
    // Convert string or other types to Date object
    if (typeof arg === "string" || arg instanceof Date) {
      return new Date(arg);
    }
  }, z.date()),  // Validates that the field is of type Date
  averageRating: z.number().min(0).max(10),
  // reviews:z.array(z.string()).default(["No reviews available"])
});

const AddModal = () =>{

  const store = useZustand();
  const form = useForm<z.infer<typeof AddformSchema>>({
    resolver: zodResolver(AddformSchema),
    defaultValues:{
      name: "",
      releaseDate: new Date().toISOString(),
      averageRating: 0
    }
  });

  const onSubmit = async(values: z.infer<typeof AddformSchema>) =>{
    console.log(values);
    const data = await axios.post(`/api/movies`, {
      name: values.name,
      releaseDate: values.releaseDate,
      averageRating: values.averageRating,
      // reviews: values.reviews
    });
    
  
  }


  return <>
  <Modal 
  title="Add new movie"
  isOpen={store.isOpen}
  onClose={store.onClose}>
    <div className="space-y-4 py-2 pb-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField 
          control={form.control} 
          name='name'
          render={({field}) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder='Name of Movie' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          <FormField 
          control={form.control} 
          name='releaseDate'
          render={({field}) => (
            <FormItem>              
              <FormControl>
                <Input placeholder='Release Date of Movie' {...field} className='mt-4'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )} 
          />
          <div className='pt-6 space-x-2 flex items-center justify-end w-full'>
            <Button variant="outline" onClick={store.onClose}>Cancel</Button>
            <Button type='submit'>Continue</Button>

          </div>
          

        </form>
      </Form>
    </div>
  </Modal>
  </>
};

export default AddModal