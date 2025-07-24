import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { ArrowRight, CreditCard, Users, Smartphone, Star, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Cartões de Fidelidade
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Digitais</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Conecte sua empresa aos clientes com nossa plataforma completa de fidelidade digital. 
              Aumente o engajamento e impulsione suas vendas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Começar Grátis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/como-funciona">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Como Funciona
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que escolher FidelityCard?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubra como nossa plataforma pode transformar o relacionamento com seus clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-elegant">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>100% Digital</CardTitle>
                <CardDescription>
                  Cartões de fidelidade totalmente digitais, sem impressão ou custos físicos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-elegant">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Engajamento</CardTitle>
                <CardDescription>
                  Aumente a fidelidade dos clientes com recompensas personalizadas e gamificação
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-elegant">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Fácil de Usar</CardTitle>
                <CardDescription>
                  Interface intuitiva para comerciantes e clientes, configuração em minutos
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Para Comerciantes
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Dashboard Completo</h3>
                    <p className="text-muted-foreground">Gerencie clientes, pontos e recompensas em um só lugar</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Dados Seguros</h3>
                    <p className="text-muted-foreground">Proteção total dos dados dos seus clientes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Automação</h3>
                    <p className="text-muted-foreground">Pontuação automática e campanhas inteligentes</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Para Clientes
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CreditCard className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Carteira Digital</h3>
                    <p className="text-muted-foreground">Todos os cartões em um app, sem cartões físicos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Recompensas Exclusivas</h3>
                    <p className="text-muted-foreground">Descontos e ofertas personalizadas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Smartphone className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Sempre Disponível</h3>
                    <p className="text-muted-foreground">Acesse seus pontos e histórico a qualquer hora</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto para começar?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Junte-se a centenas de empresas que já transformaram seu programa de fidelidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Criar Conta Grátis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contato">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Falar com Vendas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
