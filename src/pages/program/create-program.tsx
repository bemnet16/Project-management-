import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";

import { Input } from "@/components/ui/input";
import { CalendarIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

import { programformSchema } from "@/constants/form-schema";
import NavbarRoutes from "@/components/shared/navbar-routes";
import PathLink from "@/components/shared/path-link";


const paths = [
  {
    name: "Program Management",
    link: "/program",
  },
  {
    name: "Create Program",
    link: "/program/create",
  },
];

const CreateProgram = () => {
  const form = useForm<z.infer<typeof programformSchema>>({
    resolver: zodResolver(programformSchema),
    defaultValues: {
      programname: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof programformSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex flex-col gap-y-4 pb-6">
      <div className="hidden sm:block sticky top-0 py-2 bg-white z-50  w-full ">
        <NavbarRoutes>
          <>&nbsp; </>
        </NavbarRoutes>
      </div>

      <PathLink paths={paths} current="New Program" />


      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="border-[2px] border-gray-100 rounded-2xl p-6 mx-1 sm:mr-8 sm:ml-4 flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-10">
            <FormField
              control={form.control}
              name="programname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Programme Name</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} className="form-input " />
                  </FormControl>
                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="programmanager"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">
                    Programme Manager
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="form-input">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="Bemnet Adugnaw">
                        Bemnet Adugnaw
                      </SelectItem>
                      <SelectItem value="Hilina Adugnaw">
                        Hilina Adugnaw
                      </SelectItem>
                      <SelectItem value="Dagmawit Tadele">
                        Dagmawit Tadele
                      </SelectItem>
                      <SelectItem value="Eyosias Solomon">
                        Eyosias Solomon
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="programtype"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Programme Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="form-input">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="Bemnet Adugnaw">
                        Bemnet Adugnaw
                      </SelectItem>
                      <SelectItem value="Hilina Adugnaw">
                        Hilina Adugnaw
                      </SelectItem>
                      <SelectItem value="Dagmawit Tadele">
                        Dagmawit Tadele
                      </SelectItem>
                      <SelectItem value="Eyosias Solomon">
                        Eyosias Solomon
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Priority</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="form-input">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="Bemnet Adugnaw">High</SelectItem>
                      <SelectItem value="Hilina Adugnaw">Low</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="branch"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Branch</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="form-input">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="Bemnet Adugnaw">Bole</SelectItem>
                      <SelectItem value="Hilina Adugnaw">Megenagna</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Department</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="form-input">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="Bemnet Adugnaw">Finance</SelectItem>
                      <SelectItem value="Hilina Adugnaw">
                        Human Resourse
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="programstate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">
                    Is Programme Active
                  </FormLabel>
                  <FormDescription className="form-description text-slate-600 text-xs">
                    ( you can make it acceissble now or later )
                  </FormDescription>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="form-input">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="Bemnet Adugnaw">Active</SelectItem>
                      <SelectItem value="Hilina Adugnaw">Deactive</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />

            <div className="mt-8 col-span-2 mx-1 sm:mr-8 sm:ml-4 flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-10">
              <FormField
                control={form.control}
                name="startdate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="form-label">Starting Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "form-input text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 bg-white"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage className="form-message tiny-medium" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="enddate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="form-label">Ending Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "form-input text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 bg-white"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage className="form-message tiny-medium" />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="button"
              className="form-button_primary ml-auto col-span-2"
            >
              Next
            </Button>
          </div>

          <div className="border-[1px] rounded-2xl p-2 sm:p-6 mx-1 sm:mr-8 sm:ml-4">
            <FormField
              control={form.control}
              name="programdescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="small-semibold text-slate-600 pl-1">
                    Description about the programe
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="form-textarea w-full h-32 rounded-lg"
                      placeholder="Type your description here"
                      id="message"
                    />
                  </FormControl>

                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />
            <Button
              type="button"
              className="form-button_primary ml-auto col-span-2 mt-8"
            >
              Next
            </Button>
          </div>

          <div className="border-[1.5px] border-gray-100 rounded-2xl p-6 mx-1 sm:mr-8 sm:ml-4 flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-10">
            <h1 className="col-span-2 h4-bold text-slate-700">
              Budget Allocation
            </h1>

            <FormField
              control={form.control}
              name="budgettype"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel className="form-label">Type Of Budget</FormLabel>
                  <FormDescription className="form-description text-slate-600 text-xs">
                    ( Resource in material form or Budget in birr )
                  </FormDescription>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="form-input w-full max-w-[400px] ">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="Bemnet Adugnaw">Active</SelectItem>
                      <SelectItem value="Hilina Adugnaw">Deactive</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="estimatedbudget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Estimated Budget</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} className="form-input " />
                  </FormControl>
                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budgetallocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">
                    Budget Allocation Method
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="form-input">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="Bemnet Adugnaw">
                        Bemnet Adugnaw
                      </SelectItem>
                      <SelectItem value="Hilina Adugnaw">
                        Hilina Adugnaw
                      </SelectItem>
                      <SelectItem value="Dagmawit Tadele">
                        Dagmawit Tadele
                      </SelectItem>
                      <SelectItem value="Eyosias Solomon">
                        Eyosias Solomon
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />

            <Button
              type="button"
              className="form-button_primary ml-auto col-span-2 mt-8"
            >
              Next
            </Button>
          </div>

          <div className="w-full text-end px-2 sm:px-10">
            <Button
              type="submit"
              className=" bg-slate-600 hover:bg-slate-700 text-white font-semibold mx-auto col-span-2  px-8 sm:px-14 h-8 sm:h-10 sm:text-base sm:py-3 "
            >
              Finish
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateProgram;
