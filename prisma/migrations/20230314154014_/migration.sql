-- CreateTable
CREATE TABLE "forms_answers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "forms_answers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "forms_answers_email_key" ON "forms_answers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "forms_answers_cpf_key" ON "forms_answers"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "forms_answers_phone_key" ON "forms_answers"("phone");
