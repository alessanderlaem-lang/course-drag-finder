import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Footer = () => {
  return (
    <footer className="bg-background">
      {/* FAQ Section */}
      <section className="pt-24 pb-8 md:pt-80 md:pb-10 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-3">
            FAQ — PERGUNTAS ESSENCIAIS
          </h2>
          <p className="text-center text-muted-foreground mb-6 md:mb-8">
            Tire suas principais dúvidas sobre a Rise Community
          </p>
          
          <Accordion type="single" collapsible className="w-full space-y-4 pl-8 md:pl-16 lg:pl-24">
            <AccordionItem value="item-1" className="border-0 border-b border-border/50 px-6">
              <AccordionTrigger className="text-left font-normal text-foreground hover:text-foreground/80 justify-start text-base md:text-lg">
                <span className="text-destructive mr-2">?</span> Como acesso a comunidade?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-left text-base">
                → Assim que o pagamento for confirmado, você receberá por e-mail os links para entrar na comunidade (Discord e Telegram).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-0 border-b border-border/50 px-6">
              <AccordionTrigger className="text-left font-normal text-foreground hover:text-foreground/80 justify-start text-base md:text-lg">
                <span className="text-destructive mr-2">?</span> É seguro?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-left text-base">
                → Sim! Você tem 7 dias de garantia. Se não ficar satisfeito, devolvemos 100% do valor sem complicação.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-0 border-b border-border/50 px-6">
              <AccordionTrigger className="text-left font-normal text-foreground hover:text-foreground/80 justify-start text-base md:text-lg">
                <span className="text-destructive mr-2">?</span> O acesso é vitalício?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-left text-base">
                → Sim, o pagamento é único e o acesso é vitalício.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-0 border-b border-border/50 px-6">
              <AccordionTrigger className="text-left font-normal text-foreground hover:text-foreground/80 justify-start text-base md:text-lg">
                <span className="text-destructive mr-2">?</span> Como funciona o suporte?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-left text-base">
                → Nosso suporte está disponível via WhatsApp, e-mail e Discord para tirar qualquer dúvida.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-0 border-b border-border/50 px-6">
              <AccordionTrigger className="text-left font-normal text-foreground hover:text-foreground/80 justify-start text-base md:text-lg">
                <span className="text-destructive mr-2">?</span> O que é rateio?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-left text-base">
                → O rateio é uma forma colaborativa onde várias pessoas compartilham o custo de cursos, aplicativos, packs e outros conteúdos premium, tornando o acesso muito mais acessível e vantajoso.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-0 border-b border-border/50 px-6">
              <AccordionTrigger className="text-left font-normal text-foreground hover:text-foreground/80 justify-start text-base md:text-lg">
                <span className="text-destructive mr-2">?</span> O conteúdo é sempre atualizado?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-left text-base">
                → Sim! Nosso acervo é constantemente renovado — toda semana novos materiais são adicionados, e você recebe tudo automaticamente, sem precisar pagar nada a mais por isso.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-0 border-b border-border/50 px-6">
              <AccordionTrigger className="text-left font-normal text-foreground hover:text-foreground/80 justify-start text-base md:text-lg">
                <span className="text-destructive mr-2">?</span> É seguro usar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-left text-base">
                → Fique tranquilo! A Rise Community é uma comunidade fechada e segura, onde os membros compartilham conteúdos de forma organizada e privada. Você acessa tudo com total suporte e sem nenhum risco pro usuário final.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>



      {/* Disclaimer Section */}
      <section className="py-6 px-4 bg-background border-t border-border/30">
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