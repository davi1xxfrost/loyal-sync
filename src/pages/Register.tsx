import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/layout/Layout";
import { CreditCard, Eye, EyeOff, Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the registration logic
    console.log("Registration submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const benefits = [
    "30 dias de teste grátis",
    "Configuração em 10 minutos",
    "Suporte especializado",
    "Sem taxa de setup"
  ];

  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center bg-gradient-subtle py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Benefits Side */}
              <div className="space-y-8">
                <div>
                  <Link to="/" className="flex items-center space-x-2 mb-6">
                    <CreditCard className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold text-foreground">FidelityCard</span>
                  </Link>
                  <h1 className="text-4xl font-bold text-foreground mb-4">
                    Comece seu programa de fidelidade hoje
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Junte-se a centenas de empresas que já aumentaram suas vendas com nossos cartões digitais
                  </p>
                </div>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-primary-foreground" />
                      </div>
                      <span className="text-foreground font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Card className="bg-muted border-0">
                  <CardContent className="p-6">
                    <blockquote className="text-foreground">
                      "Em 3 meses aumentamos em 40% o retorno dos nossos clientes. 
                      A plataforma é muito fácil de usar!"
                    </blockquote>
                    <footer className="mt-4 text-sm text-muted-foreground">
                      — Maria Silva, Café da Esquina
                    </footer>
                  </CardContent>
                </Card>
              </div>

              {/* Registration Form */}
              <div>
                <Card className="shadow-elegant">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Criar conta grátis</CardTitle>
                    <CardDescription>
                      Preencha os dados abaixo para começar
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome completo</Label>
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
                        <Label htmlFor="company">Nome da empresa</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Nome da sua empresa"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password">Senha</Label>
                        <div className="relative">
                          <Input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Crie uma senha forte"
                            required
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirmar senha</Label>
                        <div className="relative">
                          <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Digite a senha novamente"
                            required
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="acceptTerms"
                          checked={formData.acceptTerms}
                          onCheckedChange={(checked) => 
                            setFormData({ ...formData, acceptTerms: checked as boolean })
                          }
                          required
                        />
                        <Label htmlFor="acceptTerms" className="text-sm leading-5">
                          Eu aceito os{" "}
                          <Link to="/termos" className="text-primary hover:underline">
                            Termos de Uso
                          </Link>{" "}
                          e a{" "}
                          <Link to="/privacidade" className="text-primary hover:underline">
                            Política de Privacidade
                          </Link>
                        </Label>
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        Criar conta grátis
                      </Button>
                    </form>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <Separator />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                          Ou continue com
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="w-full">
                        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          />
                        </svg>
                        Google
                      </Button>
                      <Button variant="outline" className="w-full">
                        <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Facebook
                      </Button>
                    </div>

                    <div className="text-center text-sm">
                      <span className="text-muted-foreground">Já tem uma conta? </span>
                      <Link to="/login" className="text-primary hover:underline">
                        Faça login
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;