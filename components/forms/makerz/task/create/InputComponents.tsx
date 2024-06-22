import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { taskSchemaMakerzForm } from "./schemaForms";
import { State } from "./reducerMakerzTaskFor";

type InputComponentsProps = {
  state: State;
};

const InputComponents = ({ state }: InputComponentsProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchemaMakerzForm(state.taskType)),
  });
  return (
    <div className="mt-0 ">
      <label className="text-sm text-zinc-600 dark:text-zinc-400">
        Token Name
      </label>
      <Input
        {...register("ownershipTokenName")}
        className="w-32"
        onChange={(e) => handleFormChange(e)}
      />
      {errors.ownershipTokenName && (
        <p>{errors.ownershipTokenName.message as string}</p>
      )}
    </div>
  );
};

export default InputComponents;
