// components/FaqSchema.tsx
import React from 'react';

interface FaqItem {
  q?: string;
  a?: string;
  question?: string;
  answer?: string;
}

interface FaqSchemaProps {
  children?: React.ReactNode;
  faqs?: FaqItem[];
  faqList?: FaqItem[];
}

export default function FaqSchema({ children, faqs, faqList }: FaqSchemaProps) {
  const extractedFaqs: Array<{ q: string; a: string }> = [];

  // Recursive Tree Traversal for MDX <details> tags
  const parseChildren = (nodes: React.ReactNode) => {
    React.Children.forEach(nodes, (node) => {
      if (!React.isValidElement(node)) return;

      const props = node.props as { children?: React.ReactNode; className?: string };

      // Match <details> or elements with .faq-item
      if (
        node.type === 'details' ||
        (typeof props?.className === 'string' && props.className.includes('faq-item'))
      ) {
        let questionText = '';
        let answerText = '';

        React.Children.forEach(props.children, (child) => {
          if (!React.isValidElement(child)) return;

          const childProps = child.props as { children?: React.ReactNode; className?: string };

          // Extract Question from <summary> or .faq-summary
          if (
            child.type === 'summary' ||
            (typeof childProps?.className === 'string' && childProps.className.includes('faq-summary'))
          ) {
            questionText = extractText(childProps.children);
          }

          // Extract Answer from div or .faq-content
          if (
            child.type === 'div' ||
            (typeof childProps?.className === 'string' && childProps.className.includes('faq-content'))
          ) {
            answerText = extractText(childProps.children);
          }
        });

        if (questionText && answerText) {
          extractedFaqs.push({ q: questionText, a: answerText });
        }
      }

      // Traversal for deep nested elements
      if (props?.children) {
        parseChildren(props.children);
      }
    });
  };

  // Helper to extract clean text and ignore inner SVGs/Icons
  const extractText = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(extractText).join(' ');

    if (React.isValidElement(node)) {
      const elementProps = node.props as { children?: React.ReactNode };
      if (node.type === 'svg') return '';
      if (elementProps?.children) {
        return extractText(elementProps.children);
      }
    }
    return '';
  };

  // 1. Direct Array Props Fallback (for older posts/pages)
  const rawList = faqs || faqList || [];

  // 2. MDX Children Parsing (for new layout wrapping)
  if (children) {
    parseChildren(children);
  }

  // Normalize final FAQ list across all formats
  const finalFaqs =
    rawList.length > 0
      ? rawList.map((item) => ({
          q: item.q || item.question || '',
          a: item.a || item.answer || '',
        }))
      : extractedFaqs;

  if (finalFaqs.length === 0) return <>{children}</>;

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: finalFaqs.map((faq) => ({
      '@type': 'Question',
      name: (faq.q || '').trim(),
      acceptedAnswer: {
        '@type': 'Answer',
        text: (faq.a || '').trim(),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {children}
    </>
  );
}