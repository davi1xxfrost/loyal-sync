import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Show success message or redirect
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Estamos aqui para ajudar você a criar o melhor programa de fidelidade para seu negócio
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Envie uma Mensagem</h2>
              
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Fale Conosco</CardTitle>
                  <CardDescription>
                    Preencha o formulário e entraremos em contato em até 24 horas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nome da sua empresa"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Como podemos ajudar você?"
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Enviar Mensagem
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Informações de Contato</h2>
              
              <div className="space-y-6">
                <Card className="shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Email</h3>
                        <p className="text-muted-foreground">contato@fidelitycard.com</p>
                        <p className="text-muted-foreground">suporte@fidelitycard.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
                        <p className="text-muted-foreground">(11) 9999-9999</p>
                        <p className="text-sm text-muted-foreground">Segunda a Sexta, 9h às 18h</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
                        <p className="text-muted-foreground">
                          Av. Paulista, 1000<br />
                          São Paulo, SP<br />
                          CEP: 01310-100
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Chat Online</h3>
                        <p className="text-muted-foreground mb-3">
                          Converse conosco em tempo real
                        </p>
                        <Button variant="outline" size="sm">
                          Iniciar Chat
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Encontre respostas rápidas para as dúvidas mais comuns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Como funciona o período de teste?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Oferecemos 30 dias de teste gratuito em todos os planos pagos. 
                  Você pode cancelar a qualquer momento sem cobrança.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Preciso de conhecimento técnico?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Não! Nossa plataforma foi desenvolvida para ser simples de usar. 
                  A configuração leva menos de 10 minutos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Posso integrar com meu sistema atual?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sim! Oferecemos API para integração com PDV, e-commerce e outros sistemas. 
                  Nossa equipe ajuda na configuração.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Qual o tempo de implementação?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A implementação básica leva 1 dia. Para integrações customizadas, 
                  entre 1-2 semanas dependendo da complexidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Outras Formas de Suporte
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-elegant">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Central de Ajuda</CardTitle>
                <CardDescription>
                  Documentação completa, tutoriais e guias para usar a plataforma
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Acessar Central
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center shadow-elegant">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Suporte por Telefone</CardTitle>
                <CardDescription>
                  Fale diretamente com nossa equipe de suporte especializada
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  (11) 9999-9999
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center shadow-elegant">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Suporte por Email</CardTitle>
                <CardDescription>
                  Envie suas dúvidas por email e receba resposta em até 24h
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Enviar Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;