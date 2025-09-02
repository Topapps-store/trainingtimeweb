import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertContactSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactFormSchema = insertContactSchema.extend({
  name: z.string().min(2, "El nom ha de tenir almenys 2 caràcters"),
  email: z.string().email("Introdueix un email vàlid"),
  phone: z.string().min(9, "Introdueix un telèfon vàlid"),
  service: z.string().min(1, "Selecciona un servei"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Missatge enviat!",
        description: "Gràcies per la teva sol·licitud. Ens posarem en contacte amb tu aviat.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Hi ha hagut un error enviant el missatge. Prova-ho més tard.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="py-20 px-4 bg-muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacta amb nosaltres</h1>
          <p className="text-xl text-muted-foreground">Comença la teva transformació avui mateix</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Informació de contacte</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fab fa-whatsapp text-2xl text-primary mr-4"></i>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-muted-foreground" data-testid="text-whatsapp">+376 379 750</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <i className="fas fa-envelope text-2xl text-primary mr-4"></i>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-muted-foreground" data-testid="text-email-contact">info@trainingtime.cat</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-2xl text-primary mr-4"></i>
                <div>
                  <div className="font-semibold">Ubicació</div>
                  <div className="text-muted-foreground" data-testid="text-location">Barcelona, Catalunya</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Segueix-nos</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity"
                  data-testid="link-social-instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity"
                  data-testid="link-social-facebook"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity"
                  data-testid="link-social-youtube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-lg border">
            <h3 className="text-xl font-semibold mb-6">Sol·licita informació</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom complet</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="El teu nom"
                          {...field}
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="el.teu@email.com"
                          {...field}
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telèfon</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel"
                          placeholder="+34 XXX XXX XXX"
                          {...field}
                          data-testid="input-phone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Servei d'interès</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-service">
                            <SelectValue placeholder="Selecciona un servei" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="online">Plans Online Trimestrals</SelectItem>
                          <SelectItem value="personal">Entrenament Personal Presencial</SelectItem>
                          <SelectItem value="both">Combinació Online + Presencial</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Missatge</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Explica'ns els teus objectius..."
                          className="resize-none"
                          {...field}
                          value={field.value || ""}
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {contactMutation.isPending ? "Enviant..." : "Enviar Sol·licitud"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
