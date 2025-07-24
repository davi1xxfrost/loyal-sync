import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { 
  ArrowRight, 
  BarChart3, 
  Users, 
  Gift, 
  Smartphone, 
  QrCode, 
  Star,
  Settings,
  Mail,
  Shield,
  Zap,
  Camera,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";

const Recursos = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Dashboard Analítico",
      description: "Acompanhe métricas de clientes, pontos distribuídos, resgates e crescimento do programa"
    },
    {
      icon: Users,
      title: "Gestão de Clientes",
      description: "Visualize perfil completo dos clientes, histórico de pontos e comportamento de compra"
    },
    {
      icon: Gift,
      title: "Sistema de Recompensas",
      description: "Configure recompensas flexíveis: descontos, produtos grátis, experiências exclusivas"
    },
    {
      icon: QrCode,
      title: "QR Code Personalizado",
      description: "QR Code único para sua empresa com design personalizado e fácil compartilhamento"
    },
    {
      icon: Smartphone,
      title: "Interface Mobile",
      description: "Experiência otimizada para celular, sem necessidade de download de aplicativo"
    },
    {
      icon: Settings,
      title: "Configuração Flexível",
      description: "Defina regras de pontuação, validade, limites e tipos de recompensa conforme sua necessidade"
    },
    {
      icon: Mail,
      title: "Campanhas Automáticas",
      description: "Envie mensagens personalizadas, lembretes de pontos próximos ao vencimento"
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Dados criptografados, conformidade com LGPD e backup automático das informações"
    },
    {
      icon: Zap,
      title: "Integração API",
      description: "Conecte com seu sistema atual através de API simples e documentação completa"
    },
    {
      icon: Camera,
      title: "Scanner Integrado",
      description: "Clientes podem escanear QR Codes diretamente pelo navegador, sem apps externos"
    },
    {
      icon: MessageSquare,
      title: "Suporte Dedicado",
      description: "Equipe de suporte especializada para ajudar na configuração e uso da plataforma"
    },
    {
      icon: Star,
      title: "Gamificação",
      description: "Níveis VIP, badges especiais e desafios para aumentar o engajamento dos clientes"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Recursos Completos
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tudo que você precisa para criar um programa de fidelidade digital de sucesso
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* For Merchants */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Para Comerciantes</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Dashboard Intuitivo</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Visão geral de clientes ativos e inativos</li>
                    <li>• Relatórios de pontos distribuídos e resgatados</li>
                    <li>• Análise de comportamento de compra</li>
                    <li>• Métricas de crescimento e retenção</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Gestão Avançada</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Configuração de múltiplas recompensas</li>
                    <li>• Definição de regras de pontuação flexíveis</li>
                    <li>• Campanhas promocionais automáticas</li>
                    <li>• Backup automático dos dados</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Personalização</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Logo e cores da sua marca</li>
                    <li>• Mensagens personalizadas</li>
                    <li>• QR Code com design único</li>
                    <li>• URLs personalizadas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* For Customers */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Para Clientes</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Experiência Simples</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Acesso direto pelo navegador</li>
                    <li>• Interface responsiva e rápida</li>
                    <li>• Histórico completo de pontos</li>
                    <li>• Notificações de novas recompensas</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Carteira Digital</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Todos os cartões em um só lugar</li>
                    <li>• Acesso offline ao saldo de pontos</li>
                    <li>• Compartilhamento fácil com amigos</li>
                    <li>• Histórico de resgates</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Gamificação</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Níveis VIP baseados em pontos</li>
                    <li>• Badges de conquistas especiais</li>
                    <li>• Desafios mensais exclusivos</li>
                    <li>• Recompensas surpresa</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Integração Fácil
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conecte com suas ferramentas existentes ou use de forma independente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-elegant">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>API REST</CardTitle>
                <CardDescription>
                  Integre com sistemas de PDV, e-commerce e ERPs através de API simples
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-elegant">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <QrCode className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>QR Code</CardTitle>
                <CardDescription>
                  Use nossos QR Codes prontos ou gere links personalizados para sua marca
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-elegant">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Configuração</CardTitle>
                <CardDescription>
                  Setup completo em menos de 10 minutos, sem necessidade de conhecimento técnico
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Experimente Todos os Recursos
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Teste grátis por 30 dias e veja como nossos recursos podem transformar seu negócio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Teste Grátis por 30 Dias
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contato">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Agendar Demonstração
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Recursos;