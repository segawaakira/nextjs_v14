"use client";

import { useForm, Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      theme: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleReset = () => {
    reset({
      theme: "",
    });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="theme"
          control={control}
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        <button type="submit">送信</button>
        <button type="button" onClick={() => handleReset()}>
          Reset
        </button>
      </form>
    </main>
  );
}
