import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Divider,
} from '@mui/material';

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // Headings
        h1: ({ children }) => (
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mt: 3, mb: 2, color: 'primary.main' }}>
            {children}
          </Typography>
        ),
        h2: ({ children }) => (
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 3, mb: 2, color: 'primary.main' }}>
            {children}
          </Typography>
        ),
        h3: ({ children }) => (
          <Typography variant="h6" fontWeight="600" gutterBottom sx={{ mt: 2.5, mb: 1.5, color: 'text.primary' }}>
            {children}
          </Typography>
        ),
        h4: ({ children }) => (
          <Typography variant="subtitle1" fontWeight="600" gutterBottom sx={{ mt: 2, mb: 1, color: 'text.primary' }}>
            {children}
          </Typography>
        ),

        // Paragraph
        p: ({ children }) => (
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, mb: 2 }}>
            {children}
          </Typography>
        ),

        // Strong/Bold
        strong: ({ children }) => (
          <Box component="strong" sx={{ fontWeight: 700, color: 'primary.main' }}>
            {children}
          </Box>
        ),

        // Emphasis/Italic
        em: ({ children }) => (
          <Box component="em" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
            {children}
          </Box>
        ),

        // Lists
        ul: ({ children }) => (
          <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 0.5 } }}>
            {children}
          </Box>
        ),
        ol: ({ children }) => (
          <Box component="ol" sx={{ pl: 3, mb: 2, '& li': { mb: 0.5 } }}>
            {children}
          </Box>
        ),
        li: ({ children }) => (
          <Typography component="li" variant="body1" sx={{ lineHeight: 1.7 }}>
            {children}
          </Typography>
        ),

        // Blockquote
        blockquote: ({ children }) => (
          <Box
            sx={{
              borderLeft: 4,
              borderColor: 'primary.main',
              pl: 2,
              py: 1,
              my: 2,
              bgcolor: 'action.hover',
              borderRadius: 1,
              '& p': { mb: 0 },
            }}
          >
            {children}
          </Box>
        ),

        // Code
        code: ({ children, className }) => {
          const isInline = !className;
          if (isInline) {
            return (
              <Box
                component="code"
                sx={{
                  bgcolor: 'action.selected',
                  px: 0.75,
                  py: 0.25,
                  borderRadius: 0.5,
                  fontFamily: 'monospace',
                  fontSize: '0.9em',
                }}
              >
                {children}
              </Box>
            );
          }
          return (
            <Box
              component="pre"
              sx={{
                bgcolor: 'grey.900',
                color: 'grey.100',
                p: 2,
                borderRadius: 1,
                overflow: 'auto',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                my: 2,
              }}
            >
              <code>{children}</code>
            </Box>
          );
        },

        // Table
        table: ({ children }) => (
          <TableContainer component={Paper} sx={{ my: 3, boxShadow: 2, borderRadius: 2, overflow: 'hidden' }}>
            <Table size="small">
              {children}
            </Table>
          </TableContainer>
        ),
        thead: ({ children }) => (
          <TableHead sx={{ bgcolor: 'primary.main' }}>
            {children}
          </TableHead>
        ),
        tbody: ({ children }) => (
          <TableBody>{children}</TableBody>
        ),
        tr: ({ children }) => (
          <TableRow sx={{ '&:nth-of-type(even)': { bgcolor: 'action.hover' } }}>
            {children}
          </TableRow>
        ),
        th: ({ children }) => (
          <TableCell
            sx={{
              fontWeight: 'bold',
              color: 'primary.contrastText',
              borderBottom: 2,
              borderColor: 'primary.dark',
              py: 1.5,
              px: 2,
            }}
          >
            {children}
          </TableCell>
        ),
        td: ({ children }) => (
          <TableCell sx={{ borderBottom: 1, borderColor: 'divider', py: 1.5, px: 2 }}>
            {children}
          </TableCell>
        ),

        // Horizontal Rule
        hr: () => <Divider sx={{ my: 3 }} />,

        // Link
        a: ({ children, href }) => (
          <Box
            component="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'primary.main',
              textDecoration: 'underline',
              '&:hover': { color: 'primary.dark' },
            }}
          >
            {children}
          </Box>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
