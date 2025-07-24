import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import { Check, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Planos = () => {
  const plans = [
    {
      name: "Gratuito",
      price: "R$ 0",
      period: "/mês",
      description: "Perfeito para começar",
      features: [
        "Até 100 clientes",
        "1 tipo de recompensa",
        "QR Code básico",
        "Dashboard simples",
        "Suporte por email"
      ],
      limitations: [
        "Marca FidelityCard visível",
        "Relatórios básicos"
      ],
      cta: "Começar Grátis",
      popular: false
    },
    {
      name: "Profissional",
      price: "R$ 29",
      period: "/mês",
      description: "Para pequenas e médias empresas",
      features: [
        "Até 1.000 clientes",
        "Recompensas ilimitadas",
        "QR Code personalizado",
        "Dashboard completo",
        "Campanhas automáticas",
        "Suporte prioritário",
        "API básica",
        "Relatórios avançados"
      ],
      limitations: [],
      cta: "Escolher Profissional",
      popular: true
    },
    {
      name: "Enterprise",
      price: "R$ 99",
      period: "/mês",
      description: "Para grandes empresas",
      features: [
        "Clientes ilimitados",
        "Múltiplas filiais",
        "API completa",
        "White-label completo",
        "Suporte dedicado",
        "Integração personalizada",
        "Relatórios customizados",
        "Backup prioritário",
        "Gerente de conta"
      ],
      limitations: [],
      cta: "Falar com Vendas",
      popular: false
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Planos e Preços
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Escolha o plano ideal para o tamanho do seu negócio
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative shadow-elegant hover:shadow-glow transition-all duration-300 ${
                  plan.popular ? 'border-primary shadow-glow' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Mais Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="flex items-end justify-center space-x-1">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Incluído:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Limitações:</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-muted-foreground text-sm">• {limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-4">
                    {plan.name === "Enterprise" ? (
                      <Link to="/contato">
                        <Button 
                          className="w-full" 
                          variant={plan.popular ? "default" : "outline"}
                          size="lg"
                        >
                          {plan.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    ) : (
                      <Link to="/register">
                        <Button 
                          className="w-full" 
                          variant={plan.popular ? "default" : "outline"}
                          size="lg"
                        >
                          {plan.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comparação Detalhada
            </h2>
            <p className="text-xl text-muted-foreground">
              Veja todos os recursos incluídos em cada plano
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-background rounded-lg shadow-elegant">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 font-semibold">Recursos</th>
                  <th className="text-center p-6 font-semibold">Gratuito</th>
                  <th className="text-center p-6 font-semibold">Profissional</th>
                  <th className="text-center p-6 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-border">
                  <td className="p-6 font-medium">Número de clientes</td>
                  <td className="text-center p-6">Até 100</td>
                  <td className="text-center p-6">Até 1.000</td>
                  <td className="text-center p-6">Ilimitado</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-6 font-medium">Tipos de recompensas</td>
                  <td className="text-center p-6">1</td>
                  <td className="text-center p-6">Ilimitado</td>
                  <td className="text-center p-6">Ilimitado</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-6 font-medium">QR Code personalizado</td>
                  <td className="text-center p-6">-</td>
                  <td className="text-center p-6"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                  <td className="text-center p-6"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-6 font-medium">Campanhas automáticas</td>
                  <td className="text-center p-6">-</td>
                  <td className="text-center p-6"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                  <td className="text-center p-6"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-6 font-medium">API de integração</td>
                  <td className="text-center p-6">-</td>
                  <td className="text-center p-6">Básica</td>
                  <td className="text-center p-6">Completa</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-6 font-medium">White-label</td>
                  <td className="text-center p-6">-</td>
                  <td className="text-center p-6">-</td>
                  <td className="text-center p-6"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-6 font-medium">Suporte</td>
                  <td className="text-center p-6">Email</td>
                  <td className="text-center p-6">Prioritário</td>
                  <td className="text-center p-6">Dedicado</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Posso trocar de plano a qualquer momento?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. 
                  As mudanças são aplicadas imediatamente e a cobrança é proporcional.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">O plano gratuito tem limite de tempo?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Não! O plano gratuito é permanente e você pode usar para sempre. 
                  É uma ótima forma de testar a plataforma antes de fazer upgrade.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Há taxa de setup ou configuração?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Não cobramos nenhuma taxa de setup. O valor do plano é tudo que você paga, 
                  sem custos ocultos ou taxas adicionais.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Posso cancelar a qualquer momento?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sim, você pode cancelar sua assinatura a qualquer momento. 
                  Não há fidelidade e você manterá acesso até o final do período pago.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto para começar?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Comece com o plano gratuito e faça upgrade quando precisar de mais recursos
            </p>
            <Link to="/register">
              <Button size="lg">
                Criar Conta Grátis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Planos;