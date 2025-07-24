import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { ArrowRight, UserPlus, CreditCard, Gift, Smartphone, QrCode, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ComoFunciona = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Como Funciona
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Descubra como é simples criar e gerenciar um programa de fidelidade digital
            </p>
          </div>
        </div>
      </section>

      {/* Steps for Merchants */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Para Comerciantes
            </h2>
            <p className="text-xl text-muted-foreground">
              Configure seu programa de fidelidade em poucos passos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-elegant">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Cadastre-se</CardTitle>
                <CardDescription>
                  Crie sua conta gratuita e configure as informações da sua empresa
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-elegant">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Configure Recompensas</CardTitle>
                <CardDescription>
                  Defina quantos pontos os clientes ganham e quais recompensas podem resgatar
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-elegant">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Compartilhe</CardTitle>
                <CardDescription>
                  Compartilhe o QR Code ou link do seu cartão com os clientes
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Steps for Customers */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Para Clientes
            </h2>
            <p className="text-xl text-muted-foreground">
              Acumule pontos e resgate recompensas facilmente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center shadow-elegant">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <QrCode className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Escaneie</CardTitle>
                <CardDescription>
                  Escaneie o QR Code da empresa ou acesse pelo link
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-elegant">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Cadastre-se</CardTitle>
                <CardDescription>
                  Faça um cadastro simples e rápido com seus dados básicos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-elegant">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Acumule</CardTitle>
                <CardDescription>
                  Ganhe pontos a cada compra feita na empresa
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-elegant">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Resgate</CardTitle>
                <CardDescription>
                  Troque seus pontos por descontos e recompensas
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tecnologia Simples
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Acesso pelo Celular</h3>
                    <p className="text-muted-foreground">
                      Não precisa baixar app. Funciona direto no navegador do celular, tablet ou computador.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <QrCode className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">QR Code Único</h3>
                    <p className="text-muted-foreground">
                      Cada empresa tem seu QR Code único. Clientes escaneiam para acessar o cartão de fidelidade.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <CreditCard className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Carteira Digital</h3>
                    <p className="text-muted-foreground">
                      Todos os cartões ficam salvos no celular do cliente. Acesso rápido e prático.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-subtle p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Exemplo Prático</h3>
              <div className="space-y-4 text-muted-foreground">
                <p><strong>Café da Maria:</strong> Configura que clientes ganham 1 ponto a cada R$ 10 gastos</p>
                <p><strong>João (cliente):</strong> Escaneia QR Code, se cadastra e ganha pontos automaticamente</p>
                <p><strong>Recompensa:</strong> A cada 10 pontos, João ganha um café grátis</p>
                <p><strong>Resultado:</strong> João volta mais vezes para acumular pontos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Simples assim!
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Comece agora mesmo e veja como é fácil fidelizar seus clientes
            </p>
            <Link to="/register">
              <Button size="lg">
                Criar Meu Programa Grátis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComoFunciona;