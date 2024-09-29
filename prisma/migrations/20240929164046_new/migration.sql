-- CreateTable
CREATE TABLE `Movie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `releaseDate` DATETIME(3) NOT NULL,
    `averageRating` DOUBLE NOT NULL DEFAULT -1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `movieId` INTEGER NOT NULL,
    `reviewer` VARCHAR(191) NULL,
    `rating` DOUBLE NOT NULL,
    `comment` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_movieId_fkey` FOREIGN KEY (`movieId`) REFERENCES `Movie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
