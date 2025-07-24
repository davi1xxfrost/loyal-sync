import { CreditCard, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <CreditCard className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">FidelityCard</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A plataforma completa para cartões de fidelidade digital que conecta 
              empresas e clientes de forma inteligente.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/como-funciona" className="text-sm text-muted-foreground hover:text-primary">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/recursos" className="text-sm text-muted-foreground hover:text-primary">
                  Recursos
                </Link>
              </li>
              <li>
                <Link to="/planos" className="text-sm text-muted-foreground hover:text-primary">
                  Planos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm text-muted-foreground hover:text-primary">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacidade" className="text-sm text-muted-foreground hover:text-primary">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-sm text-muted-foreground hover:text-primary">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/suporte" className="text-sm text-muted-foreground hover:text-primary">
                  Suporte
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contato@fidelitycard.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 FidelityCard. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;