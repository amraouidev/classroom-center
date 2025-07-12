import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mt-8 pt-8 border-t border-border flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-4 text-sm">
                <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
                <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <a href="https://sites.google.com/view/classrooms-workspace/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Classroom</a>
                <a href="https://sites.google.com/view/docs-document/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Document</a>
            </div>
            <div className="text-center text-sm text-muted-foreground">
                <p>&copy; Unblocked Games G+. All rights reserved.</p>
            </div>
        </div>
      </div>
    </footer>
  );
}
