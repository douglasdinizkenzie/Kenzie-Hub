import * as yup from "yup";

export const editModalSchema = yup.object().shape({
  status: yup.string().required("Escolha um status"),
});
