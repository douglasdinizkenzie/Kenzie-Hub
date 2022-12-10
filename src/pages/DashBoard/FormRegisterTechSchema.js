import * as yup from "yup";

export const FormRegisterTechSchema = yup.object().shape({
  title: yup.string().required("Preecha o campo"),
  status: yup.string().required("Escolha um status"),
});
