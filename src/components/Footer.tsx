import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "O que é rateio?",
    answer: "O rateio é uma forma colaborativa onde várias pessoas compartilham o custo de cursos, aplicativos, packs e outros conteúdos premium, tornando o acesso muito mais acessível e vantajoso."
  },
  {
    question: "Como recebo o acesso?",
    answer: "Assim que o pagamento for confirmado, você receberá por e-mail os links para entrar na comunidade (Discord e Telegram)."
  },
  {
    question: "Demora quanto tempo pra liberar?",
    answer: "O acesso é liberado imediatamente após a confirmação do pagamento. No caso de PIX ou cartão, é instantâneo!"
  },
  {
    question: "É só esse valor mesmo? Tem mensalidade depois?",
    answer: "Sim, o pagamento é único e o acesso é vitalício. Sem mensalidades, sem taxas escondidas."
  },
  {
    question: "Consigo acessar pelo celular?",
    answer: "Sim! Você pode acessar de qualquer dispositivo: celular, tablet ou computador."
  },
  {
    question: "O conteúdo é atualizado?",
    answer: "Sim! Nosso acervo é constantemente renovado — toda semana novos materiais são adicionados, e você recebe tudo automaticamente."
  },
  {
    question: "Não gostei. Posso pedir reembolso?",
    answer: "Sim! Você tem 7 dias de garantia. Se não ficar satisfeito, devolvemos 100% do valor sem complicação."
  },
  {
    question: "O que exatamente eu vou acessar?",
    answer: "Você terá acesso a mais de 150TB de conteúdo: cursos, softwares, packs, templates e muito mais."
  },
  {
    question: "É legal usar isso? Não vou ter problema?",
    answer: "Fique tranquilo! A Rise Community é uma comunidade fechada e segura, onde os membros compartilham conteúdos de forma organizada e privada."
  },
  {
    question: "Preciso baixar algo pra acessar?",
    answer: "Não! Você acessa tudo pelo navegador ou pelos apps Discord e Telegram, sem precisar baixar nada adicional."
  }
];

const Footer = () => {
  return (
    <footer className="bg-background">
      {/* FAQ Section */}
      <section className="pt-64 pb-8 md:pt-80 md:pb-10 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-12 tracking-wider uppercase">
            FAQ — Perguntas Essenciais
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-0">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-0 border-b border-border/20"
              >
                <AccordionTrigger className="text-left font-normal hover:no-underline py-5 group [&>svg]:hidden">
                  <span className="flex items-center gap-3 flex-1">
                    <span className="text-primary font-bold text-lg">?</span>
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
                      {item.question}
                    </span>
                  </span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pl-8">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* WhatsApp Section */}
      <section className="py-6 md:py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-[#25D366] rounded-2xl p-6 md:p-8 text-center bg-background/50">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Ficou com alguma dúvida?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-5 max-w-2xl mx-auto leading-relaxed">
              Nossa equipe está disponível para te ajudar. É só chamar no WhatsApp e tirar todas as suas dúvidas sobre a <span className="font-bold text-foreground">Rise Community</span>
            </p>
            <Button 
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-base px-8 py-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://wa.me/5511972734906?text=Ol%C3%A1%2C+tenho+algumas+d%C3%BAvidas+sobre+a+Rise+Community%2C+poderia+me+ajudar%3F', '_blank')}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Iniciar conversa
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-6 px-4 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-sm text-foreground">
            © 2025 <span className="font-bold">Rise Community</span> — Todos os direitos reservados.
          </p>
          
          <div className="flex justify-center gap-4 text-sm">
            <a href="#" className="text-primary hover:underline transition-colors">
              Termos de Uso
            </a>
            <span className="text-muted-foreground">|</span>
            <a href="#" className="text-primary hover:underline transition-colors">
              Política de Privacidade
            </a>
          </div>

          <div className="space-y-3 text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <p>
              As informações fornecidas neste site são armazenadas de forma segura e utilizadas apenas para oferecer uma experiência personalizada, alinhada aos seus interesses.
            </p>
            <p>
              Este site não é afiliado ao Facebook ou à Meta Inc. Os resultados podem variar de pessoa para pessoa, e os depoimentos exibidos refletem experiências individuais.
            </p>
            <p>
              Seus dados estão protegidos: não compartilhamos, vendemos ou divulgamos suas informações para terceiros. Nunca enviaremos spam.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;