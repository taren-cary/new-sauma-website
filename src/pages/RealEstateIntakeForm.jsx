import { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  User, Briefcase, Mail, Globe, MapPin, Link as LinkIcon,
  Eye, EyeOff, CheckCircle, AlertCircle, Lock, Send
} from 'react-feather';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const TIMEZONES = [
  { value: '', label: 'Select your timezone...' },
  { value: 'America/New_York',    label: 'Eastern Time (ET) — New York, Miami, Atlanta' },
  { value: 'America/Chicago',     label: 'Central Time (CT) — Chicago, Dallas, Houston' },
  { value: 'America/Denver',      label: 'Mountain Time (MT) — Denver, Salt Lake City' },
  { value: 'America/Phoenix',     label: 'Mountain Time — Arizona (no daylight saving)' },
  { value: 'America/Los_Angeles', label: 'Pacific Time (PT) — Los Angeles, Seattle' },
  { value: 'America/Anchorage',   label: 'Alaska Time (AKT)' },
  { value: 'Pacific/Honolulu',    label: 'Hawaii Time (HST)' },
];

const STATES = [
  { value: '', label: 'Select your state...' },
  { value: 'AL', label: 'Alabama' },       { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },       { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },    { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },   { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },       { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },        { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },      { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },          { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },      { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },         { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' }, { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },     { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },      { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },      { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' }, { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },    { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },{ value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },          { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },        { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },         { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },       { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },    { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },     { value: 'WY', label: 'Wyoming' },
];

const EMPTY_FORM = {
  clientName: '',
  clientCompany: '',
  clientEmail: '',
  clientGmail: '',
  clientTimezone: '',
  clientState: '',
  clientGhlLocationId: '',
  clientListingSheetId: '',
  anthropicApiKey: '',
  clientTelegramBotToken: '',
};

const RealEstateIntakeForm = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [showApiKey, setShowApiKey] = useState(false);
  const [showBotToken, setShowBotToken] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const validate = () => {
    const required = [
      ['clientName', 'Full name'],
      ['clientCompany', 'Brokerage / company name'],
      ['clientEmail', 'Email address'],
      ['clientGmail', 'Business Gmail address'],
      ['clientTimezone', 'Timezone'],
      ['clientState', 'State'],
      ['clientListingSheetId', 'Google Sheets listing ID'],
      ['anthropicApiKey', 'Anthropic API key'],
      ['clientTelegramBotToken', 'Telegram bot token'],
    ];
    for (const [field, label] of required) {
      if (!form[field].trim()) return `Please fill in: ${label}`;
    }
    if (!form.clientGmail.toLowerCase().endsWith('@gmail.com')) {
      return 'Business Gmail must be a @gmail.com address.';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert(null);

    const err = validate();
    if (err) {
      setAlert({ type: 'error', message: err });
      return;
    }

    setIsSubmitting(true);

    const payload = {
      client_name:               form.clientName.trim(),
      client_company:            form.clientCompany.trim(),
      client_email:              form.clientEmail.trim(),
      client_gmail:              form.clientGmail.trim(),
      client_timezone:           form.clientTimezone,
      client_state:              form.clientState,
      client_ghl_location_id:    form.clientGhlLocationId.trim() || null,
      client_listing_sheet_id:   form.clientListingSheetId.trim(),
      anthropic_api_key:         form.anthropicApiKey.trim(),
      client_telegram_bot_token: form.clientTelegramBotToken.trim(),
    };

    try {
      const url = import.meta.env.VITE_RE_SIGNUP_URL;
      const anonKey = import.meta.env.VITE_RE_ANON_KEY;

      if (!url) throw new Error('VITE_RE_SIGNUP_URL is not configured.');

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(anonKey && {
            Authorization: `Bearer ${anonKey}`,
            apikey: anonKey,
          }),
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error('Edge function error:', res.status, text);
        throw new Error('Server error. Please try again or contact support.');
      }

      setIsSubmitted(true);
      setForm(EMPTY_FORM);
    } catch (error) {
      console.error('Submission failed:', error);
      setAlert({ type: 'error', message: error.message || 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Client Setup — Sauma AI Real Estate</title>
        <meta name="description" content="Activate your Sauma AI real estate system. Fill out this form to get started." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <PageContainer>
        <Navbar />

        <FormContainer>
          {isSubmitted ? (
            <FormCard
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SuccessState>
                <CheckCircle size={60} color="#22c55e" />
                <SuccessTitle>You're all set!</SuccessTitle>
                <SuccessText>
                  We've received your setup information. Our system is now spinning up your AI — you'll receive an activation email shortly with next steps.
                </SuccessText>
                <SuccessNote>
                  Keep an eye on <strong>{form.clientEmail || 'your inbox'}</strong> — the email will include links to connect your Google Calendar, Gmail, and CRM. The whole process takes about 15 minutes.
                </SuccessNote>
              </SuccessState>
            </FormCard>
          ) : (
            <FormCard
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Header>
                <FormTitle>Activate Your Real Estate AI</FormTitle>
                <FormSubtitle>
                  You're one form away from having a fully autonomous AI system working for your real estate business — qualifying leads, booking showings, and following up — 24/7.
                  <br /><br />
                  This takes about <strong>5 minutes</strong>. Fill out each section carefully; the information below is used to build and configure your system.
                </FormSubtitle>
              </Header>

              {alert && (
                <AlertBox type={alert.type}>
                  {alert.type === 'error' ? <AlertCircle size={18} /> : <CheckCircle size={18} />}
                  {alert.message}
                </AlertBox>
              )}

              <form onSubmit={handleSubmit} noValidate>

                {/* ── Section 1: About You ── */}
                <Section>
                  <SectionTitle><User size={20} /> About You</SectionTitle>
                  <SectionDesc>Basic information about you and your business.</SectionDesc>

                  <Field>
                    <Label>Your Full Name <Required>*</Required></Label>
                    <Input
                      type="text"
                      placeholder="e.g. Sarah Johnson"
                      value={form.clientName}
                      onChange={set('clientName')}
                    />
                    <Hint>Your personal name — this is how your AI will introduce itself to leads (e.g., "Hi, I'm calling on behalf of Sarah Johnson").</Hint>
                  </Field>

                  <Field>
                    <Label>Brokerage / Company Name <Required>*</Required></Label>
                    <Input
                      type="text"
                      placeholder="e.g. Johnson Realty Group"
                      value={form.clientCompany}
                      onChange={set('clientCompany')}
                    />
                    <Hint>Your brokerage or team name. This appears in emails and SMS messages your AI sends.</Hint>
                  </Field>

                  <Field>
                    <Label>Your Email Address <Required>*</Required></Label>
                    <Input
                      type="email"
                      placeholder="e.g. sarah@johnsonrealty.com"
                      value={form.clientEmail}
                      onChange={set('clientEmail')}
                    />
                    <Hint>Use the same email you used when signing up. This is where we'll send your activation instructions and system updates.</Hint>
                  </Field>
                </Section>

                {/* ── Section 2: System Setup ── */}
                <Section>
                  <SectionTitle><Globe size={20} /> System Setup</SectionTitle>
                  <SectionDesc>These settings configure how your AI operates day-to-day.</SectionDesc>

                  <Field>
                    <Label>Business Gmail Address <Required>*</Required></Label>
                    <Input
                      type="email"
                      placeholder="e.g. sarah@gmail.com"
                      value={form.clientGmail}
                      onChange={set('clientGmail')}
                    />
                    <Hint>
                      <strong>Must be a Gmail address (@gmail.com).</strong> Your AI connects to this inbox to detect and respond to Zillow lead emails automatically. It also uses this Gmail to schedule appointments on your calendar. This is separate from the email above — it's the Gmail account you actively use for your real estate work.
                    </Hint>
                  </Field>

                  <Field>
                    <Label>Your Timezone <Required>*</Required></Label>
                    <Select value={form.clientTimezone} onChange={set('clientTimezone')}>
                      {TIMEZONES.map((tz) => (
                        <option key={tz.value} value={tz.value}>{tz.label}</option>
                      ))}
                    </Select>
                    <Hint>Used to schedule appointments correctly and run your daily AI briefings at the right local time (e.g., your morning summary arrives at 7am <em>your</em> time).</Hint>
                  </Field>

                  <Field>
                    <Label>Your State <Required>*</Required></Label>
                    <Select value={form.clientState} onChange={set('clientState')}>
                      {STATES.map((s) => (
                        <option key={s.value} value={s.value}>{s.label || s.value}</option>
                      ))}
                    </Select>
                    <Hint>Used to provision your AI's local phone number in the right area code. For example, selecting Maryland gives your AI a Maryland phone number so leads see a familiar local number when they receive a call.</Hint>
                  </Field>
                </Section>

                {/* ── Section 3: Listing Sheet ── */}
                <Section>
                  <SectionTitle><LinkIcon size={20} /> Your Listing Sheet</SectionTitle>
                  <SectionDesc>
                    Your AI reads your Google Sheets listing spreadsheet to answer lead questions about available properties in real time.
                  </SectionDesc>

                  <Field>
                    <Label>Google Sheets Listing ID <Required>*</Required></Label>
                    <Input
                      type="text"
                      placeholder="e.g. 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms"
                      value={form.clientListingSheetId}
                      onChange={set('clientListingSheetId')}
                    />
                    <Hint>
                      Open your listing Google Sheet and look at the URL in your browser. It will look like:<br />
                      <code>docs.google.com/spreadsheets/d/<HighlightSpan>1BxiMVs0XRA5nF...</HighlightSpan>/edit</code><br />
                      Copy just the highlighted part between <code>/d/</code> and <code>/edit</code> and paste it here. If you don't have a listing sheet yet, your onboarding specialist will help you set one up.
                    </Hint>
                  </Field>
                </Section>

                {/* ── Section 4: CRM (Optional) ── */}
                <Section>
                  <SectionTitle><Briefcase size={20} /> CRM Integration <OptionalTag>Optional</OptionalTag></SectionTitle>
                  <SectionDesc>
                    If you use GoHighLevel (GHL) as your CRM, provide your Location ID below and your AI will automatically create contacts and update pipeline stages for every lead it handles. If you don't use GHL, leave this blank — your AI will default to HubSpot (free).
                  </SectionDesc>

                  <Field>
                    <Label>GoHighLevel Location ID</Label>
                    <Input
                      type="text"
                      placeholder="e.g. ve9EPM428h8vShlRW1KT"
                      value={form.clientGhlLocationId}
                      onChange={set('clientGhlLocationId')}
                    />
                    <Hint>
                      Log into your GHL account and look at the URL in your browser. It will look like:<br />
                      <code>app.gohighlevel.com/v2/location/<HighlightSpan>ve9EPM428h8vShlRW1KT</HighlightSpan>/dashboard</code><br />
                      Copy just the highlighted ID and paste it here. Leave blank if you don't use GHL.
                    </Hint>
                  </Field>
                </Section>

                {/* ── Section 5: API Keys ── */}
                <Section>
                  <SectionTitle><Lock size={20} /> API Keys</SectionTitle>
                  <SectionDesc>
                    Your AI runs on your own accounts — you pay providers directly and keep full control. These keys are stored securely and never shared.
                  </SectionDesc>

                  <SecurityNote>
                    <Lock size={14} />
                    Your API keys are transmitted over HTTPS and stored encrypted. They are only used to power your AI system and are never accessible to other clients.
                  </SecurityNote>

                  <Field>
                    <Label>Anthropic API Key <Required>*</Required></Label>
                    <PasswordWrapper>
                      <Input
                        type={showApiKey ? 'text' : 'password'}
                        placeholder="sk-ant-api03-..."
                        value={form.anthropicApiKey}
                        onChange={set('anthropicApiKey')}
                        style={{ paddingRight: '3rem' }}
                      />
                      <EyeButton type="button" onClick={() => setShowApiKey((v) => !v)} aria-label="Toggle visibility">
                        {showApiKey ? <EyeOff size={18} /> : <Eye size={18} />}
                      </EyeButton>
                    </PasswordWrapper>
                    <Hint>
                      Your AI runs on Claude (by Anthropic) using your own API key — this keeps you in full control of costs and usage.
                      <StepList>
                        <li>Go to <strong>console.anthropic.com/settings/keys</strong></li>
                        <li>Click <strong>"Create Key"</strong></li>
                        <li>Give it a name (e.g., "Sauma AI") and copy the key</li>
                        <li>Paste it here — you won't be able to see it again after closing that page</li>
                      </StepList>
                      Make sure your Anthropic account has billing set up or credits available.
                    </Hint>
                  </Field>

                  <Field>
                    <Label>Telegram Bot Token <Required>*</Required></Label>
                    <PasswordWrapper>
                      <Input
                        type={showBotToken ? 'text' : 'password'}
                        placeholder="123456789:ABCdefGHIjklMNOpqrSTUvwxYZ"
                        value={form.clientTelegramBotToken}
                        onChange={set('clientTelegramBotToken')}
                        style={{ paddingRight: '3rem' }}
                      />
                      <EyeButton type="button" onClick={() => setShowBotToken((v) => !v)} aria-label="Toggle visibility">
                        {showBotToken ? <EyeOff size={18} /> : <Eye size={18} />}
                      </EyeButton>
                    </PasswordWrapper>
                    <Hint>
                      Your AI sends you real-time notifications and alerts through a private Telegram bot. To create one:
                      <StepList>
                        <li>Open the Telegram app on your phone or desktop</li>
                        <li>Search for <strong>@BotFather</strong> and start a chat</li>
                        <li>Send the message: <code>/newbot</code></li>
                        <li>Follow the prompts — give your bot a name and username</li>
                        <li>BotFather will send you a token that looks like <code>123456789:ABCdef...</code> — copy and paste it here</li>
                      </StepList>
                      Don't share this token with anyone else.
                    </Hint>
                  </Field>
                </Section>

                <SubmitButton type="submit" disabled={isSubmitting}>
                  <Send size={20} />
                  {isSubmitting ? 'Submitting...' : 'Activate My AI System'}
                </SubmitButton>

                <SubmitNote>
                  After submitting, our system will begin setting up your AI automatically. You'll receive an email within a few minutes with next steps.
                </SubmitNote>
              </form>
            </FormCard>
          )}
        </FormContainer>

        <Footer />
      </PageContainer>
    </>
  );
};

// ── Styled Components ──────────────────────────────────────────────────────────

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const FormContainer = styled.div`
  max-width: 820px;
  margin: 0 auto;
  padding: 120px 2rem 80px;

  @media (max-width: 768px) {
    padding: 100px 1rem 60px;
  }
`;

const FormCard = styled(motion.div)`
  background: #fff;
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const FormTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1.9rem;
  }
`;

const FormSubtitle = styled.p`
  font-size: 1.05rem;
  color: #555;
  line-height: 1.7;
  max-width: 660px;
  margin: 0 auto;
`;

const Section = styled.div`
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid #f0f0f0;

  &:last-of-type {
    border-bottom: none;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #222;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.4rem;

  svg {
    color: #667eea;
  }
`;

const SectionDesc = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const OptionalTag = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  background: #f0f0ff;
  color: #667eea;
  padding: 2px 10px;
  border-radius: 20px;
  margin-left: 0.25rem;
`;

const Field = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 0.4rem;
`;

const Required = styled.span`
  color: #e53e3e;
  margin-left: 2px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  color: #333;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.12);
  }

  &::placeholder {
    color: #aaa;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  color: #333;
  background: #fff;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23667eea' d='M1 1l5 5 5-5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.12);
  }
`;

const Hint = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.5rem;
  line-height: 1.6;

  code {
    background: #f5f5f5;
    padding: 1px 5px;
    border-radius: 4px;
    font-size: 0.82rem;
    font-family: monospace;
  }
`;

const HighlightSpan = styled.span`
  background: #ede9fe;
  color: #5b21b6;
  padding: 1px 4px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.82rem;
`;

const StepList = styled.ol`
  margin: 0.6rem 0 0.6rem 1.2rem;
  padding: 0;
  line-height: 1.7;

  li {
    margin-bottom: 0.15rem;
  }
`;

const PasswordWrapper = styled.div`
  position: relative;
`;

const EyeButton = styled.button`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
  display: flex;
  align-items: center;
  padding: 0;

  &:hover {
    color: #667eea;
  }
`;

const SecurityNote = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #166534;
  font-size: 0.875rem;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  line-height: 1.5;

  svg {
    flex-shrink: 0;
    margin-top: 1px;
  }
`;

const AlertBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.9rem 1rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.5;

  ${({ type }) =>
    type === 'error'
      ? `background: #fff5f5; border: 1px solid #fed7d7; color: #c53030;`
      : `background: #f0fff4; border: 1px solid #c6f6d5; color: #276749;`}

  svg {
    flex-shrink: 0;
    margin-top: 1px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 1.1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: none;
  border-radius: 14px;
  font-size: 1.1rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(102, 126, 234, 0.45);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SubmitNote = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: #888;
  margin-top: 1rem;
  line-height: 1.6;
`;

const SuccessState = styled.div`
  text-align: center;
  padding: 2rem 1rem;
`;

const SuccessTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #111;
  margin: 1.25rem 0 0.75rem;
`;

const SuccessText = styled.p`
  font-size: 1.05rem;
  color: #444;
  line-height: 1.7;
  max-width: 540px;
  margin: 0 auto 1.25rem;
`;

const SuccessNote = styled.p`
  font-size: 0.95rem;
  color: #666;
  background: #f7f7ff;
  border: 1px solid #e0e0ff;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
`;

export default RealEstateIntakeForm;
