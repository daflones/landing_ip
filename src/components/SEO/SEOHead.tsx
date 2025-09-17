import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "InovaPet - Embalagens PET, Garrafas e Preformas Personalizadas",
  description = "InovaPet: Fabricante líder em embalagens PET, garrafas PET e preformas personalizadas. Soluções completas para bebidas, cosméticos e alimentos. Orçamento grátis!",
  keywords = "embalagens PET, garrafa PET, preformas PET, embalagens personalizadas, fabricante embalagens PET, InovaPet, garrafas plásticas, embalagens sustentáveis",
  canonicalUrl = "https://inovapet.com.br",
  ogImage = "https://inovapet.com.br/images/og-image.jpg",
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://inovapet.com.br/#organization",
        "name": "InovaPet Embalagens",
        "url": "https://inovapet.com.br",
        "logo": {
          "@type": "ImageObject",
          "url": "https://inovapet.com.br/images/logoinovapet/logo-site.png",
          "width": 320,
          "height": 80
        },
        "description": "Fabricante líder em embalagens PET, garrafas PET e preformas personalizadas no Brasil",
        "foundingDate": "2016",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Vicente de Carvalho, 909 Sala 1119",
          "addressLocality": "Rio de Janeiro",
          "addressRegion": "RJ",
          "postalCode": "21210-000",
          "addressCountry": "BR"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+55-21-99452-7706",
            "contactType": "sales",
            "areaServed": "BR",
            "availableLanguage": "Portuguese"
          },
          {
            "@type": "ContactPoint",
            "telephone": "+55-21-3451-9599",
            "contactType": "customer service",
            "areaServed": "BR",
            "availableLanguage": "Portuguese"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/inovapet",
          "https://www.instagram.com/inovapet",
          "https://www.linkedin.com/company/inovapet"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://inovapet.com.br/#website",
        "url": "https://inovapet.com.br",
        "name": "InovaPet Embalagens",
        "description": "Fabricante de embalagens PET, garrafas e preformas personalizadas",
        "publisher": {
          "@id": "https://inovapet.com.br/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://inovapet.com.br/busca?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://inovapet.com.br/#webpage",
        "url": "https://inovapet.com.br",
        "name": title,
        "isPartOf": {
          "@id": "https://inovapet.com.br/#website"
        },
        "about": {
          "@id": "https://inovapet.com.br/#organization"
        },
        "description": description,
        "breadcrumb": {
          "@id": "https://inovapet.com.br/#breadcrumb"
        },
        "inLanguage": "pt-BR"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://inovapet.com.br/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://inovapet.com.br"
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Embalagens PET Personalizadas",
        "description": "Embalagens PET de alta qualidade para bebidas, cosméticos, alimentos e produtos de limpeza",
        "brand": {
          "@type": "Brand",
          "name": "InovaPet"
        },
        "manufacturer": {
          "@id": "https://inovapet.com.br/#organization"
        },
        "category": "Embalagens Plásticas",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "BRL",
          "seller": {
            "@id": "https://inovapet.com.br/#organization"
          }
        }
      },
      {
        "@type": "Product",
        "name": "Garrafas PET",
        "description": "Garrafas PET para bebidas, com diferentes capacidades e formatos personalizados",
        "brand": {
          "@type": "Brand",
          "name": "InovaPet"
        },
        "manufacturer": {
          "@id": "https://inovapet.com.br/#organization"
        },
        "category": "Garrafas Plásticas",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "BRL",
          "seller": {
            "@id": "https://inovapet.com.br/#organization"
          }
        }
      },
      {
        "@type": "Product",
        "name": "Preformas PET",
        "description": "Preformas PET de alta performance para processo de sopro, ideais para sopradores",
        "brand": {
          "@type": "Brand",
          "name": "InovaPet"
        },
        "manufacturer": {
          "@id": "https://inovapet.com.br/#organization"
        },
        "category": "Preformas Plásticas",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "BRL",
          "seller": {
            "@id": "https://inovapet.com.br/#organization"
          }
        }
      }
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter Card */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
