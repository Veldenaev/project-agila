-- CreateTable
CREATE TABLE `Client` (
    `ClientID` SMALLINT NOT NULL,
    `ContractID` SMALLINT NOT NULL,
    `FirstName` VARCHAR(15) NULL,
    `LastName` VARCHAR(15) NULL,
    `MiddleName` VARCHAR(15) NULL,
    `Email` VARCHAR(50) NULL,
    `CellNum` VARCHAR(15) NULL,
    `TelNum` VARCHAR(15) NULL,
    `CityAdd` VARCHAR(30) NULL,
    `Remarks` VARCHAR(200) NULL,
    `user` VARCHAR(20) NULL,
    `pass` CHAR(50) NULL,

    UNIQUE INDEX `Client_ContractID_key`(`ContractID`),
    PRIMARY KEY (`ClientID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lawyer` (
    `LawyerID` SMALLINT NOT NULL,
    `FirstName` VARCHAR(15) NULL,
    `LastName` VARCHAR(15) NULL,
    `MiddleName` VARCHAR(15) NULL,
    `Email` VARCHAR(50) NULL,
    `AltEmail` VARCHAR(50) NULL,
    `CellNum` VARCHAR(15) NULL,
    `TelNum` VARCHAR(15) NULL,
    `CityAdd` VARCHAR(30) NULL,
    `isManager` BIT(1) NULL DEFAULT false,
    `user` VARCHAR(20) NULL,
    `pass` CHAR(50) NULL,

    PRIMARY KEY (`LawyerID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contract` (
    `ContractID` SMALLINT NOT NULL,
    `ClientID` SMALLINT NOT NULL,
    `MajorPleading` SMALLINT NULL,
    `MinorPleading` SMALLINT NULL,
    `PartnerApp` SMALLINT NULL,
    `JuniorAssocApp` SMALLINT NULL,
    `SeniorAssocApp` SMALLINT NULL,
    `isAmendment` BIT(1) NULL DEFAULT false,
    `RootContractID` SMALLINT NULL,
    `Date` DATE NULL,

    PRIMARY KEY (`ContractID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Work` (
    `WorkID` SMALLINT NOT NULL,
    `CaseNum` VARCHAR(10) NOT NULL,
    `Type` VARCHAR(20) NULL,
    `Date` DATE NULL,
    `Remarks` VARCHAR(100) NULL,
    `location` VARCHAR(100) NULL,
    `filename` VARCHAR(20) NULL,
    `Title` VARCHAR(40) NULL,
    `FeeAmt` SMALLINT NULL,

    PRIMARY KEY (`WorkID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Case` (
    `CaseNum` VARCHAR(10) NOT NULL,
    `ContractID` SMALLINT NOT NULL,
    `ClientID` SMALLINT NOT NULL,
    `Status` VARCHAR(300) NULL,
    `Type` VARCHAR(20) NULL,
    `Title` VARCHAR(40) NULL,
    `Venue` VARCHAR(40) NULL,

    PRIMARY KEY (`CaseNum`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `PaymentID` SMALLINT NOT NULL,
    `ClientID` SMALLINT NOT NULL,
    `Amount` INTEGER NOT NULL,
    `Date` DATE NULL,

    PRIMARY KEY (`PaymentID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `accounts` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `provider_account_id` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,

    UNIQUE INDEX `accounts_provider_provider_account_id_key`(`provider`, `provider_account_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sessions` (
    `id` VARCHAR(191) NOT NULL,
    `session_token` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `sessions_session_token_key`(`session_token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `email_verified` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `verificationtokens` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `verificationtokens_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_LawyerToWork` (
    `A` SMALLINT NOT NULL,
    `B` SMALLINT NOT NULL,

    UNIQUE INDEX `_LawyerToWork_AB_unique`(`A`, `B`),
    INDEX `_LawyerToWork_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CaseToLawyer` (
    `A` VARCHAR(10) NOT NULL,
    `B` SMALLINT NOT NULL,

    UNIQUE INDEX `_CaseToLawyer_AB_unique`(`A`, `B`),
    INDEX `_CaseToLawyer_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Client` ADD CONSTRAINT `Client_ContractID_fkey` FOREIGN KEY (`ContractID`) REFERENCES `Contract`(`ContractID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contract` ADD CONSTRAINT `Contract_ClientID_fkey` FOREIGN KEY (`ClientID`) REFERENCES `Client`(`ClientID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Work` ADD CONSTRAINT `Work_CaseNum_fkey` FOREIGN KEY (`CaseNum`) REFERENCES `Case`(`CaseNum`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Case` ADD CONSTRAINT `Case_ClientID_fkey` FOREIGN KEY (`ClientID`) REFERENCES `Client`(`ClientID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Case` ADD CONSTRAINT `Case_ContractID_fkey` FOREIGN KEY (`ContractID`) REFERENCES `Contract`(`ContractID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_ClientID_fkey` FOREIGN KEY (`ClientID`) REFERENCES `Client`(`ClientID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `accounts` ADD CONSTRAINT `accounts_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sessions` ADD CONSTRAINT `sessions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_LawyerToWork` ADD CONSTRAINT `_LawyerToWork_A_fkey` FOREIGN KEY (`A`) REFERENCES `Lawyer`(`LawyerID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_LawyerToWork` ADD CONSTRAINT `_LawyerToWork_B_fkey` FOREIGN KEY (`B`) REFERENCES `Work`(`WorkID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CaseToLawyer` ADD CONSTRAINT `_CaseToLawyer_A_fkey` FOREIGN KEY (`A`) REFERENCES `Case`(`CaseNum`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CaseToLawyer` ADD CONSTRAINT `_CaseToLawyer_B_fkey` FOREIGN KEY (`B`) REFERENCES `Lawyer`(`LawyerID`) ON DELETE CASCADE ON UPDATE CASCADE;
