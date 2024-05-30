"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { desc } from "drizzle-orm";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(3).max(100),
  language: z.string().min(3).max(50),
  gitHubRepo: z.string().min(3).max(100),
});

function CreateRoomForm() {

  // 1. Define your form.  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      gitHubRepo: "",
      language: ""
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pt-10">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Public Room Name..." {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Room Description..." {...field} />
              </FormControl>
              <FormDescription>
                Describe room use.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gitHubRepo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Git Hub Repo</FormLabel>
              <FormControl>
                <Input placeholder="Room Description..." {...field} />
              </FormControl>
              <FormDescription>
                Describe room use.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primary Programming language</FormLabel>
              <FormControl>
                <Input placeholder="What language would you like to cover..." {...field} />
              </FormControl>
              <FormDescription>
                Describe room use.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default CreateRoomForm;
