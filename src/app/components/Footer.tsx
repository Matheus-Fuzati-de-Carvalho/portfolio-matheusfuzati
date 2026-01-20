import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/matheus-fuzati-de-carvalho",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/Matheus-Fuzati-de-Carvalho",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "mailto:fuzatimatheus@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative border-t border-[#F5B700]/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Name & Title */}
          <div className="text-center md:text-left">
            <p className="font-mono text-[#F5B700] text-sm mb-1">
              Matheus Fuzati
            </p>
            <p className="text-[#F5B700]/70 text-xs uppercase tracking-wider">
              Analytics Engineer
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group p-2 hover:bg-[#F5B700]/10 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-[#F5B700]/80 group-hover:text-[#F5B700] transition-colors" strokeWidth={1.5} />
                </a>
              );
            })}
          </div>

          {/* Right - Copyright */}
          <p className="text-[#F5B700]/60 text-xs text-center md:text-right">
            © 2026 todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}