import * as yup from "yup";

export const FormRegisterSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório")
    .min(2, "Deve conter pelo menos 2 caracteres")
    .max(200, "Deve contar no máximo 200 caracteres"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula")
    .matches(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "É necessário pelo menos um caracter especial. Exemplos: @,$,!,etc."
    )
    .min(6, "É necessário pelo menos 6 caracteres"),

  confirmPassword: yup
    .string()
    .required("Confirmação obrigatória")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),

  bio: yup.string().required("A Biografia é obrigatória"),

  contact: yup.string().required("O tipo de contato é obrigatório"),

  course_module: yup.string().required("Esolha o módulo"),
});
