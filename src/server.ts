import { z } from "zod";

const userSchema = z.object({
  nome: z.string()
  .min(3, { message: "Nome deve ter no mínimo 3 caracteres" })
  .transform((nome) => nome.toUpperCase()),
  age: z.number().min(18, { message: "Idade deve ser maior que 18 anos" })
});

type User = z.infer<typeof userSchema>;

function saveUserDatabase(user: User) {
    const { nome, age } = userSchema.parse(user);
    console.log(`User ${nome} saved with success!`);
    console.log('age : ', age);
}

const user = {
  nome: "Lauro",
  age: 48,
};

saveUserDatabase(user);
