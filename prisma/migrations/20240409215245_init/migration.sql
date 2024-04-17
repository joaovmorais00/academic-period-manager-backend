-- CreateTable
CREATE TABLE "Period" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" VARCHAR(255) NOT NULL,

    CONSTRAINT "Period_pkey" PRIMARY KEY ("id")
);
