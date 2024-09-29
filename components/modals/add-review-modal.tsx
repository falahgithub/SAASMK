"use client";

import * as z from 'zod'

import { useZustand } from "@/hooks/useZustand";
import { Modal } from "../modal";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ReviewModal } from '../modal-review ';
import axios from 'axios';

const AddReviewformSchema = z.object({
  name: z.string().min(1),
  rating: z.string(),
  comment: z.string().min(5),
});

const AddReviewModal = () =>{

  const store = useZustand();
  const form = useForm<z.infer<typeof AddReviewformSchema>>({
    resolver: zodResolver(AddReviewformSchema),
    defaultValues:{
      name: "",
      comment: "",
      rating:""
    }
  });

  const onSubmit = async(values: z.infer<typeof AddReviewformSchema>) =>{
    console.log(values)
    try {
      const data = await axios.post(`/api/reviews`, {
      name: values.name,
      comment: values.comment,
      rating: values.rating,
    });
    } catch (error : {error: string}) {
      alert("Missing Movie ID")      
    }
    
    
  }


  return <>
  <ReviewModal 
  title="Add new review"
  isNewReviewOpen={store.isNewReviewOpen}
  onNewReviewClose={store.onNewReviewClose}>
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
          name='rating'
          render={({field}) => (
            <FormItem>              
              <FormControl>
                <Input placeholder='Rating out of 10' {...field} className='mt-4' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} 
          />
          <FormField 
          control={form.control} 
          name='comment'
          render={({field}) => (
            <FormItem>              
              <FormControl>
                <Input placeholder='Review comments' {...field} className='mt-4'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )} 
          />
          <div className='pt-6 space-x-2 flex items-center justify-end w-full'>
            <Button variant="outline" onClick={store.onNewReviewClose}>Cancel</Button>
            <Button type='submit'>Continue</Button>

          </div>
          

        </form>
      </Form>
    </div>
  </ReviewModal>
  </>
};

export default AddReviewModal;