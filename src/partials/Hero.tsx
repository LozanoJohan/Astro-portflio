import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hola, nosotros somos <GradientText>EMBs UNAL</GradientText> 👋
        </>
      }
      description={
        <>
          Sociedad de Ingeniería en Medicina y Biología{' '}
          {/* <a className="text-cyan-400 hover:underline" href="/">
            EMBs
          </a>{' '} */}
          del
{' '}
          <a className="text-cyan-400 hover:underline" href="/">
          Instituto de Ingenieros Eléctricos y Electrónicos
          </a>{' '}
          en la Universidad Nacional de Colombia.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
