'use client';

import { useState } from 'react';
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const translations = {
  pt: {
    title: 'Excluir Minha Conta',
    subtitle: 'Solicitação de exclusão de conta e dados pessoais',
    lastUpdate: 'Última atualização: Janeiro de 2025',

    section1Title: 'Sobre a Exclusão de Conta',
    section1Text: 'De acordo com a Lei Geral de Proteção de Dados (LGPD) e as políticas do Google Play e Apple App Store, você tem o direito de solicitar a exclusão completa da sua conta e todos os dados pessoais associados a ela.',

    section2Title: 'O que será excluído',
    section2Items: [
      'Informações pessoais (nome, email, telefone)',
      'Dados de saúde e fitness (peso, medidas, fotos de progresso)',
      'Histórico de treinos e planos alimentares',
      'Mensagens e conversas com profissionais',
      'Dados de pagamento e histórico de transações',
      'Preferências e configurações do aplicativo',
    ],

    section3Title: 'O que NÃO será excluído',
    section3Text: 'Alguns dados podem ser retidos por obrigações legais:',
    section3Items: [
      'Registros fiscais e notas fiscais (retenção legal de 5 anos)',
      'Logs de segurança anonimizados',
      'Dados agregados e estatísticos (sem identificação pessoal)',
    ],

    section4Title: 'Prazo para Exclusão',
    section4Text: 'Após a confirmação da sua solicitação, seus dados serão permanentemente excluídos em até 30 dias. Durante este período, sua conta ficará desativada e você não poderá acessá-la.',

    section5Title: 'Como Solicitar a Exclusão',
    section5Text: 'Você pode solicitar a exclusão da sua conta de duas formas:',

    option1Title: 'Opção 1: Pelo Aplicativo',
    option1Steps: [
      'Abra o aplicativo MyFit',
      'Vá em Configurações > Conta',
      'Toque em "Excluir minha conta"',
      'Confirme sua identidade',
      'Confirme a exclusão',
    ],

    option2Title: 'Opção 2: Por Email',
    option2Text: 'Envie um email para',
    option2Email: 'privacy@myfitplatform.com',
    option2Subject: 'com o assunto "Solicitação de Exclusão de Conta" incluindo:',
    option2Items: [
      'Seu nome completo',
      'Email cadastrado na conta',
      'Motivo da exclusão (opcional)',
    ],

    formTitle: 'Solicitar Exclusão Agora',
    formDescription: 'Preencha o formulário abaixo para solicitar a exclusão da sua conta. Você receberá um email de confirmação.',
    emailLabel: 'Email cadastrado',
    emailPlaceholder: 'seu@email.com',
    reasonLabel: 'Motivo da exclusão (opcional)',
    reasonPlaceholder: 'Conte-nos por que você está saindo...',
    confirmLabel: 'Confirmo que entendo que esta ação é irreversível e todos os meus dados serão permanentemente excluídos.',
    submitButton: 'Solicitar Exclusão',
    submitting: 'Enviando...',

    successTitle: 'Solicitação Enviada',
    successText: 'Sua solicitação de exclusão foi recebida. Você receberá um email de confirmação em breve. Seus dados serão excluídos em até 30 dias.',

    errorText: 'Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente ou entre em contato pelo email privacy@myfitplatform.com',

    warningTitle: 'Atenção',
    warningText: 'A exclusão da conta é permanente e não pode ser desfeita. Todos os seus dados, incluindo treinos, progresso e histórico, serão perdidos para sempre.',

    contactTitle: 'Dúvidas?',
    contactText: 'Se você tiver alguma dúvida sobre o processo de exclusão de conta, entre em contato:',

    backHome: '← Voltar para a página inicial',
  },
  en: {
    title: 'Delete My Account',
    subtitle: 'Account and personal data deletion request',
    lastUpdate: 'Last updated: January 2025',

    section1Title: 'About Account Deletion',
    section1Text: 'In accordance with data protection regulations (GDPR, CCPA) and Google Play and Apple App Store policies, you have the right to request the complete deletion of your account and all associated personal data.',

    section2Title: 'What will be deleted',
    section2Items: [
      'Personal information (name, email, phone)',
      'Health and fitness data (weight, measurements, progress photos)',
      'Workout history and meal plans',
      'Messages and conversations with professionals',
      'Payment data and transaction history',
      'App preferences and settings',
    ],

    section3Title: 'What will NOT be deleted',
    section3Text: 'Some data may be retained due to legal obligations:',
    section3Items: [
      'Tax records and invoices (5-year legal retention)',
      'Anonymized security logs',
      'Aggregated statistical data (no personal identification)',
    ],

    section4Title: 'Deletion Timeline',
    section4Text: 'After confirming your request, your data will be permanently deleted within 30 days. During this period, your account will be deactivated and you will not be able to access it.',

    section5Title: 'How to Request Deletion',
    section5Text: 'You can request account deletion in two ways:',

    option1Title: 'Option 1: Through the App',
    option1Steps: [
      'Open the MyFit app',
      'Go to Settings > Account',
      'Tap "Delete my account"',
      'Verify your identity',
      'Confirm deletion',
    ],

    option2Title: 'Option 2: By Email',
    option2Text: 'Send an email to',
    option2Email: 'privacy@myfitplatform.com',
    option2Subject: 'with the subject "Account Deletion Request" including:',
    option2Items: [
      'Your full name',
      'Email registered on the account',
      'Reason for deletion (optional)',
    ],

    formTitle: 'Request Deletion Now',
    formDescription: 'Fill out the form below to request the deletion of your account. You will receive a confirmation email.',
    emailLabel: 'Registered email',
    emailPlaceholder: 'your@email.com',
    reasonLabel: 'Reason for deletion (optional)',
    reasonPlaceholder: 'Tell us why you are leaving...',
    confirmLabel: 'I confirm that I understand this action is irreversible and all my data will be permanently deleted.',
    submitButton: 'Request Deletion',
    submitting: 'Sending...',

    successTitle: 'Request Submitted',
    successText: 'Your deletion request has been received. You will receive a confirmation email shortly. Your data will be deleted within 30 days.',

    errorText: 'An error occurred while sending your request. Please try again or contact us at privacy@myfitplatform.com',

    warningTitle: 'Warning',
    warningText: 'Account deletion is permanent and cannot be undone. All your data, including workouts, progress, and history, will be lost forever.',

    contactTitle: 'Questions?',
    contactText: 'If you have any questions about the account deletion process, please contact us:',

    backHome: '← Back to homepage',
  },
  es: {
    title: 'Eliminar Mi Cuenta',
    subtitle: 'Solicitud de eliminación de cuenta y datos personales',
    lastUpdate: 'Última actualización: Enero de 2025',

    section1Title: 'Sobre la Eliminación de Cuenta',
    section1Text: 'De acuerdo con las regulaciones de protección de datos y las políticas de Google Play y Apple App Store, tienes derecho a solicitar la eliminación completa de tu cuenta y todos los datos personales asociados.',

    section2Title: 'Qué será eliminado',
    section2Items: [
      'Información personal (nombre, email, teléfono)',
      'Datos de salud y fitness (peso, medidas, fotos de progreso)',
      'Historial de entrenamientos y planes alimenticios',
      'Mensajes y conversaciones con profesionales',
      'Datos de pago e historial de transacciones',
      'Preferencias y configuraciones de la aplicación',
    ],

    section3Title: 'Qué NO será eliminado',
    section3Text: 'Algunos datos pueden retenerse por obligaciones legales:',
    section3Items: [
      'Registros fiscales y facturas (retención legal de 5 años)',
      'Registros de seguridad anonimizados',
      'Datos estadísticos agregados (sin identificación personal)',
    ],

    section4Title: 'Plazo de Eliminación',
    section4Text: 'Después de confirmar tu solicitud, tus datos serán eliminados permanentemente en un máximo de 30 días. Durante este período, tu cuenta estará desactivada y no podrás acceder a ella.',

    section5Title: 'Cómo Solicitar la Eliminación',
    section5Text: 'Puedes solicitar la eliminación de tu cuenta de dos formas:',

    option1Title: 'Opción 1: Por la Aplicación',
    option1Steps: [
      'Abre la aplicación MyFit',
      'Ve a Configuración > Cuenta',
      'Toca "Eliminar mi cuenta"',
      'Verifica tu identidad',
      'Confirma la eliminación',
    ],

    option2Title: 'Opción 2: Por Email',
    option2Text: 'Envía un email a',
    option2Email: 'privacy@myfitplatform.com',
    option2Subject: 'con el asunto "Solicitud de Eliminación de Cuenta" incluyendo:',
    option2Items: [
      'Tu nombre completo',
      'Email registrado en la cuenta',
      'Motivo de la eliminación (opcional)',
    ],

    formTitle: 'Solicitar Eliminación Ahora',
    formDescription: 'Completa el formulario a continuación para solicitar la eliminación de tu cuenta. Recibirás un email de confirmación.',
    emailLabel: 'Email registrado',
    emailPlaceholder: 'tu@email.com',
    reasonLabel: 'Motivo de la eliminación (opcional)',
    reasonPlaceholder: 'Cuéntanos por qué te vas...',
    confirmLabel: 'Confirmo que entiendo que esta acción es irreversible y todos mis datos serán eliminados permanentemente.',
    submitButton: 'Solicitar Eliminación',
    submitting: 'Enviando...',

    successTitle: 'Solicitud Enviada',
    successText: 'Tu solicitud de eliminación ha sido recibida. Recibirás un email de confirmación pronto. Tus datos serán eliminados en un máximo de 30 días.',

    errorText: 'Ocurrió un error al enviar tu solicitud. Por favor, intenta de nuevo o contáctanos en privacy@myfitplatform.com',

    warningTitle: 'Atención',
    warningText: 'La eliminación de la cuenta es permanente y no se puede deshacer. Todos tus datos, incluyendo entrenamientos, progreso e historial, se perderán para siempre.',

    contactTitle: '¿Preguntas?',
    contactText: 'Si tienes alguna pregunta sobre el proceso de eliminación de cuenta, contáctanos:',

    backHome: '← Volver a la página principal',
  },
};

export default function DeleteAccountPage() {
  const { locale } = useLocale();
  const t = translations[locale] || translations.pt;

  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !confirmed) return;

    setStatus('loading');

    // Simulate API call - in production, this would call the actual API
    try {
      // For now, we'll just simulate a successful submission
      // In production: await fetch('/api/account/delete-request', { method: 'POST', body: JSON.stringify({ email, reason }) });
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32">
        <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
        <p className="text-xl text-muted-foreground mb-2">{t.subtitle}</p>
        <p className="text-muted-foreground mb-8">{t.lastUpdate}</p>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Warning Banner */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-destructive mb-2">{t.warningTitle}</h3>
            <p className="text-destructive/80">{t.warningText}</p>
          </div>

          {/* Section 1: About */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.section1Title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.section1Text}</p>
          </section>

          {/* Section 2: What will be deleted */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.section2Title}</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {t.section2Items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Section 3: What will NOT be deleted */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.section3Title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{t.section3Text}</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {t.section3Items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Section 4: Timeline */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.section4Title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.section4Text}</p>
          </section>

          {/* Section 5: How to Request */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.section5Title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{t.section5Text}</p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Option 1: App */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">{t.option1Title}</h3>
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                  {t.option1Steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              {/* Option 2: Email */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">{t.option2Title}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.option2Text}{' '}
                  <a href={`mailto:${t.option2Email}?subject=Account Deletion Request`} className="text-primary hover:underline font-medium">
                    {t.option2Email}
                  </a>{' '}
                  {t.option2Subject}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {t.option2Items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Deletion Request Form */}
          <section className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-2">{t.formTitle}</h2>
            <p className="text-muted-foreground mb-6">{t.formDescription}</p>

            {status === 'success' ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center">
                <svg className="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-green-600 mb-2">{t.successTitle}</h3>
                <p className="text-green-600/80">{t.successText}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t.emailLabel} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.emailPlaceholder}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium mb-2">
                    {t.reasonLabel}
                  </label>
                  <textarea
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder={t.reasonPlaceholder}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="confirm"
                    checked={confirmed}
                    onChange={(e) => setConfirmed(e.target.checked)}
                    required
                    className="mt-1 w-5 h-5 rounded border-input"
                  />
                  <label htmlFor="confirm" className="text-sm text-muted-foreground">
                    {t.confirmLabel}
                  </label>
                </div>

                {status === 'error' && (
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                    <p className="text-destructive text-sm">{t.errorText}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!email || !confirmed || status === 'loading'}
                  className="w-full bg-destructive text-destructive-foreground py-3 px-6 rounded-lg font-medium hover:bg-destructive/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {status === 'loading' ? t.submitting : t.submitButton}
                </button>
              </form>
            )}
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.contactTitle}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{t.contactText}</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Email: <a href="mailto:privacy@myfitplatform.com" className="text-primary hover:underline">privacy@myfitplatform.com</a></li>
              <li>Website: <a href="/contact" className="text-primary hover:underline">myfitplatform.com/contact</a></li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/" className="text-primary hover:underline">
            {t.backHome}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
