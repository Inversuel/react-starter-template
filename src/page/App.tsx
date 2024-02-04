import React from 'react';
import { Typography } from '../components/ui/typography';

function App() {
  return (
    <section className="flex flex-col gap-5 py-8 lg:pt-24">
      <Typography variant="h3">Hello world!</Typography>
      <section>
        <div className="grid grid-flow-row text-orange-500">
          <div className="bg-primary">bg-primary</div>
          <div className="bg-primary-foreground">bg-primary-foreground</div>
          <div className="bg-secondary">bg-secondary</div>
          <div className="bg-secondary-foreground">bg-secondary-foreground</div>
          <div className="bg-border">bg-border</div>
          <div className="bg-input">bg-input</div>
          <div className="bg-ring">bg-ring</div>
          <div className="bg-background">bg-background</div>
          <div className="bg-foreground">bg-foreground</div>
          <div className="bg-destructive">bg-destructive</div>
          <div className="bg-destructive-foreground">bg-destructive-foreground</div>
          <div className="bg-muted">bg-muted</div>
          <div className="bg-muted-foreground">bg-muted-foreground</div>
          <div className="bg-accent">bg-accent</div>
          <div className="bg-accent-foreground">bg-accent-foreground</div>
          <div className="bg-popover">bg-popover</div>
          <div className="bg-popover-foreground">bg-popover-foreground</div>
          <div className="bg-card">bg-card</div>
          <div className="bg-card-foreground">bg-card-foreground</div>
        </div>
      </section>
    </section>
  );
}

export default App;
