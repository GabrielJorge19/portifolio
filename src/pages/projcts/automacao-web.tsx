
import { motion } from 'framer-motion';
import { ArrowLeft, Activity, Database, Layers, ShieldCheck } from 'lucide-react';
import { Link } from 'wouter';
import { Navbar } from '@/components/layout/Navbar';
import { useEffect } from 'react';

export default function AutomacaoWeb() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <main className="pt-28">
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="glass-panel p-10 rounded-[2rem] border border-white/5 shadow-2xl">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-primary mb-4">
                    <ShieldCheck size={16} />
                    Apresentação do Sistema
                  </span>
                  <h1 className="text-4xl sm:text-5xl font-display font-black text-foreground leading-tight">
                    OS Manager
                  </h1>
                  <p className="mt-6 text-lg text-muted-foreground leading-8">
                    Aplicação desktop desenvolvida com Electron e React para automatizar a criação e envio de Ordens de Serviço no sistema SMGI Max. O sistema foi concebido para substituir processos manuais repetitivos, reduzir erros humanos e oferecer maior eficiência operacional.
                  </p>
                </div>
                <div className="flex flex-col gap-4 rounded-3xl border border-white/5 bg-background/80 p-6 text-sm text-muted-foreground">
                  <div>
                    <span className="block text-xs uppercase tracking-[0.3em] text-primary mb-2">Público-alvo</span>
                    Equipes de manutenção e gestores de contratos que trabalham com ordens de serviço no SMGI Max.
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-[0.3em] text-primary mb-2">Valor</span>
                    Redução de tarefas manuais, ganho de velocidade e melhora na consistência dos processos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-[1fr_0.85fr] items-start">
            <div className="grid gap-4">
              {[
                {
                  icon: <Activity size={18} className="text-primary" />,
                  title: 'Automação Robusta',
                  description: 'Criação e envio de OS com supervisão em tempo real, sem necessidade de intervenção manual constante.'
                },
                {
                  icon: <Database size={18} className="text-primary" />,
                  title: 'Importação Inteligente',
                  description: 'Suporte a arquivos Excel e CSV com validação de dados antes do processamento.'
                },
                {
                  icon: <Layers size={18} className="text-primary" />,
                  title: 'Arquitetura em Camadas',
                  description: 'Front-end React + Vite, Electron para desktop e Playwright para automação do navegador.'
                }
              ].map((item) => (
                <div key={item.title} className="glass-panel p-6 rounded-3xl border border-white/5">
                  <div className="flex items-center gap-3 mb-4 text-sm font-semibold text-foreground">
                    {item.icon}
                    {item.title}
                  </div>
                  <p className="text-muted-foreground leading-7">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="glass-panel p-10 rounded-[2rem] border border-white/5">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">Como Funciona</h3>
                  <div className="space-y-4 text-muted-foreground leading-7">
                    <p>O fluxo do OS Manager simplifica o ciclo de criação de ordens de serviço em etapas claras:</p>
                    <ol className="list-decimal list-inside space-y-3">
                      <li>Importe o arquivo Excel ou CSV com a lista de ativos.</li>
                      <li>Inicie o processo e acompanhe cada ordem em tempo real.</li>
                      <li>O sistema cria as OS diretamente no SMGI Max usando Playwright.</li>
                      <li>O número gerado da OS aparece automaticamente na tabela.</li>
                      <li>Exporte o resultado final em Excel ou CSV.</li>
                    </ol>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">Funcionalidades Principais</h3>
                  <ul className="grid gap-4 text-muted-foreground leading-7">
                    <li>Criação automática de ordens de serviço com feedback visual.</li>
                    <li>Acompanhamento do status: Pendente, Em Andamento e Concluído.</li>
                    <li>Visualização imediata do número da OS gerada.</li>
                    <li>Exportação de resultados em Excel ou CSV.</li>
                    <li>Interface limpa e responsiva, pensada para uso corporativo.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-primary font-mono text-sm uppercase tracking-[0.3em]">Demonstração</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-3 mb-4">O sistema em ação</h2>
              <p className="text-muted-foreground leading-8 max-w-2xl">
                Veja o OS Manager funcionando em tempo real, desde a importação dos dados até a conclusão da automação e exportação dos resultados.
              </p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-2 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300">
                  <img
                    src="/portifolio/os-manager/inicio.png"
                    alt="Tela inicial do OS Manager"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">Tela inicial — Interface limpa e intuitiva</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300">
                  <img
                    src="/portifolio/os-manager/arquivo importado.png"
                    alt="Arquivo importado com sucesso"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">Importação — Arquivo carregado e validado</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300">
                  <img
                    src="/portifolio/os-manager/concluido.png"
                    alt="Processamento concluído com sucesso"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">Concluído — Ordens criadas com números gerados</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300">
                  <img
                    src="/portifolio/os-manager/exportando.png"
                    alt="Exportação dos resultados"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">Exportação — Resultados em Excel ou CSV</p>
              </motion.div>
            </div>

            <div className="glass-panel p-10 rounded-[2rem] border border-white/5">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">Vídeo demonstrativo</h3>
              <div className="relative rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                <video
                  controls
                  className="w-full h-auto"
                  poster="/portifolio/os-manager/concluido.png"
                >
                  <source src="/portifolio/os-manager/Criação de ordem de serviço.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeo HTML5.
                </video>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Assista ao processo completo de criação de ordens de serviço em tempo real
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="glass-panel p-8 rounded-3xl border border-white/5">
                <span className="text-primary uppercase tracking-[0.3em] text-xs mb-3 block">Arquitetura</span>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Camadas do projeto</h3>
                <p className="text-muted-foreground leading-7">
                  O sistema foi projetado em camadas para separar apresentação, execução e automação, garantindo manutenibilidade e desempenho consistente.
                </p>
              </div>
              <div className="glass-panel p-8 rounded-3xl border border-white/5">
                <span className="text-primary uppercase tracking-[0.3em] text-xs mb-3 block">Front-end</span>
                <p className="text-muted-foreground leading-7">
                  Interface construída com React 19 e Vite, entregando navegação fluida e componentes modernos adequados a um painel desktop e landing page de apresentação.
                </p>
              </div>
              <div className="glass-panel p-8 rounded-3xl border border-white/5">
                <span className="text-primary uppercase tracking-[0.3em] text-xs mb-3 block">Automação</span>
                <p className="text-muted-foreground leading-7">
                  A automação usa Playwright para interagir com o navegador e controlar o SMGI Max, o que torna o processo repetitivo preciso e escalável.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="glass-panel p-10 rounded-[2rem] border border-white/5">
              <h3 className="text-3xl font-display font-bold text-foreground mb-4">Performance e Benefícios</h3>
              <p className="text-muted-foreground leading-8 mb-6">
                A solução apresenta ganhos de eficiência significativos em relação ao processo manual, com redução de tempo, eliminação de erros e maior consistência na criação de ordens de serviço.
              </p>
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="glass-panel p-6 rounded-3xl border border-white/5">
                  <span className="text-primary block text-xs uppercase tracking-[0.3em] mb-3">Velocidade</span>
                  <p className="text-muted-foreground leading-7">A automação é até 3-6x mais rápida do que o processo manual, reduzindo significativamente o tempo de execução.</p>
                </div>
                <div className="glass-panel p-6 rounded-3xl border border-white/5">
                  <span className="text-primary block text-xs uppercase tracking-[0.3em] mb-3">Precisão</span>
                  <p className="text-muted-foreground leading-7">Elimina erros de digitação e evita ordens duplicadas, garantindo 100% de consistência nos dados.</p>
                </div>
                <div className="glass-panel p-6 rounded-3xl border border-white/5">
                  <span className="text-primary block text-xs uppercase tracking-[0.3em] mb-3">Praticidade</span>
                  <p className="text-muted-foreground leading-7">Interface intuitiva e processo simplificado: importe, clique em iniciar e acompanhe os resultados em tempo real.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-10 rounded-[2rem] border border-white/5"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center">
                <div>
                  <span className="text-primary uppercase tracking-[0.3em] text-xs">Próximo passo</span>
                  <h3 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-3">Veja o projeto em ação</h3>
                  <p className="mt-4 text-muted-foreground leading-7">
                    Esta página apresenta as decisões principais do OS Manager e a proposta de valor do projeto, mantendo o mesmo padrão visual do portfólio pessoal.
                  </p>
                </div>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/50 bg-primary/5 px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary/20"
                >
                  <ArrowLeft size={18} />
                  Voltar ao portfólio
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
