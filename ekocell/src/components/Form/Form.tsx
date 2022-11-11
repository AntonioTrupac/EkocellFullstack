import SubmitButton from "@components/Button/SubmitButton";
import Input from "@components/Input/Input";
import TextArea from "@components/Input/TextArea";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

export type IFormValue = {
  ime: string;
  prezime: string;
  email: string;
  telefon: string;
  upit: string;
};

const Form = () => {
  const { register, handleSubmit } = useForm<IFormValue>({
    defaultValues: {
      ime: "",
      prezime: "",
      email: "",
      telefon: "",
      upit: "",
    },
  });

  const onSubmit: SubmitHandler<IFormValue> = (data, e?: any) => {
    e?.preventDefault();
    alert(JSON.stringify(data));
    e?.target.reset();
  };

  return (
    <div className="mt-10 md:mt-0 flex-grow">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-end"
      >
        <Input
          className="flex flex-col mt-6 md:mt-2 w-full"
          name="ime"
          placeholder="Ime"
          register={register}
        />

        <Input
          className="flex flex-col mt-3 w-full"
          name="prezime"
          placeholder="Prezime"
          register={register}
        />

        <Input
          className="flex flex-col mt-3 w-full"
          type="email"
          name="email"
          placeholder="Email"
          register={register}
        />

        <Input
          className="flex flex-col mt-3 w-full"
          type="tel"
          name="telefon"
          placeholder="Telefon"
          register={register}
        />

        <TextArea
          className="flex flex-col mt-3 w-full"
          name="upit"
          placeholder="Upit"
          register={register}
        />

        <SubmitButton className="mt-6" type="submit">
          Pošaljite
        </SubmitButton>
      </form>
    </div>
  );
};

export default Form;
