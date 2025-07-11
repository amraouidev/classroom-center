import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Gamepad2, Laptop, ShieldCheck, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Gamepad2,
    title: 'No Sign-Up Required',
    description: 'Jump straight into the action without any annoying registration forms.',
  },
  {
    icon: Laptop,
    title: 'Works on Chromebooks',
    description: 'Our games are optimized to run smoothly on your school Chromebook.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe for School Use',
    description: 'All content is carefully curated to be appropriate for all ages.',
  },
  {
    icon: Sparkles,
    title: 'Updated Weekly',
    description: 'We add new and exciting games every week to keep the fun going.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            🧩 Why Choose GameZone Unblocked?
          </h2>
        </div>
        <Card className="mt-12 shadow-lg">
          <CardContent className="p-8">
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                    <p className="mt-1 text-muted-foreground">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
