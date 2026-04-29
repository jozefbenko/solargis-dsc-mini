# shadcn → DSC-mini mapping

The translation Claude follows when rendering Solargis UI in artifacts.
Pair this doc with `brand-overrides.css` — the CSS pushes shadcn variables
to DSC tokens; this doc maps DSC-mini's component vocabulary to the shadcn
primitive + variant + className recipe that lands the DSC look.

## Ground rules

1. **shadcn primitive first.** The artifact already has shadcn/ui + Tailwind via the allowed CDNs. Don't ship custom React.
2. **`brand-overrides.css` does the colors.** Don't override `--primary` / `--background` / etc. inline — the brand layer already remapped them.
3. **One Tailwind class for layout, never for color.** Layout (`flex`, `gap-3`, `grid-cols-2`) is fine. Color (`bg-red-500`, `text-orange-600`) is not — use the variants below.
4. **When DSC has a variant shadcn doesn't (success/warning/info), reach for the `.sg-status-*` utility class** from the brand layer instead of composing colors by hand.

---

## Component map

### 1. Button — `sg-button`

| DSC variant | shadcn recipe |
|---|---|
| `solid`   *(default)* | `<Button>…</Button>` |
| `tonal`   | `<Button variant="secondary">…</Button>` |
| `outline` | `<Button variant="outline">…</Button>` |
| `ghost`   | `<Button variant="ghost">…</Button>` |
| `danger`  | `<Button variant="destructive">…</Button>` |

Sizes: `size="sm" | "default" | "lg"` (shadcn names map directly to DSC `sm | md | lg`).

```tsx
<Button>Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="destructive" size="sm" disabled>Delete</Button>
```

---

### 2. Input — `sg-input`

shadcn `<Input>` directly. Types pass through (`type="email"`, `type="password"`, `type="number"`, etc.).
For `invalid` state, add `aria-invalid` — shadcn styles it via the brand layer's `--destructive`.

```tsx
<Input type="email" placeholder="you@example.com" />
<Input aria-invalid value="bad@" />
```

---

### 3. Label — `sg-label`

shadcn `<Label>` directly. DSC's `required` asterisk has no shadcn equivalent — render it as a span:

```tsx
<Label htmlFor="email">
  Email <span className="text-destructive">*</span>
</Label>
```

---

### 4. Select — `sg-select`

shadcn `<Select>` (Radix-based). DSC-mini exposes options via a `.options` property; in shadcn you map them to `<SelectItem>`:

```tsx
<Select>
  <SelectTrigger><SelectValue placeholder="Pick one" /></SelectTrigger>
  <SelectContent>
    {options.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
  </SelectContent>
</Select>
```

---

### 5. Checkbox — `sg-checkbox`

shadcn `<Checkbox>` directly. Pair with `<Label>` for the text:

```tsx
<div className="flex items-center gap-2">
  <Checkbox id="terms" defaultChecked />
  <Label htmlFor="terms">Accept terms</Label>
</div>
```

---

### 6. Radio — `sg-radio`

shadcn `<RadioGroup>` + `<RadioGroupItem>`. shadcn groups radios at the parent level (DSC uses `name=`):

```tsx
<RadioGroup defaultValue="pro">
  <div className="flex items-center gap-2">
    <RadioGroupItem id="pro" value="pro" />
    <Label htmlFor="pro">Pro</Label>
  </div>
</RadioGroup>
```

---

### 7. Switch — `sg-switch`

shadcn `<Switch>` directly:

```tsx
<div className="flex items-center gap-2">
  <Switch id="notif" />
  <Label htmlFor="notif">Notifications</Label>
</div>
```

---

### 8. Card — `sg-card`

shadcn `<Card>` + `<CardHeader>` / `<CardContent>` / `<CardFooter>`. DSC's `elevation="0|1|2|3"` maps to Tailwind shadow utilities — but with DSC's exact box-shadow values via the brand layer's `--sg-elevation-*`.

| DSC elevation | shadcn recipe |
|---|---|
| `0` | `<Card className="shadow-none">` |
| `1` | `<Card>` *(default — Card already ships with a subtle shadow; brand layer aligns it)* |
| `2` | `<Card className="[box-shadow:var(--sg-elevation-2)]">` |
| `3` | `<Card className="[box-shadow:var(--sg-elevation-3)]">` *(falls back to shadcn default if brand layer omits)* |

```tsx
<Card>
  <CardHeader><CardTitle>Site yield</CardTitle></CardHeader>
  <CardContent>1,234 kWh this month.</CardContent>
  <CardFooter><Button variant="ghost" size="sm">View report</Button></CardFooter>
</Card>
```

---

### 9. Badge — `sg-badge`

shadcn ships `default | secondary | destructive | outline`. DSC has 6 variants — three of them (`success`, `warning`, `info`) need the brand layer's `.sg-status-*` utility:

| DSC variant | shadcn recipe |
|---|---|
| `primary` | `<Badge>…</Badge>` |
| `neutral` | `<Badge variant="secondary">…</Badge>` |
| `error`   | `<Badge variant="destructive">…</Badge>` |
| `success` | `<Badge variant="outline" className="sg-status-success">…</Badge>` |
| `warning` | `<Badge variant="outline" className="sg-status-warning">…</Badge>` |
| `info`    | `<Badge variant="outline" className="sg-status-info">…</Badge>` |

```tsx
<Badge>Active</Badge>
<Badge variant="outline" className="sg-status-success">OK</Badge>
```

---

### 10. Chip — `sg-chip` (removable)

shadcn doesn't ship a chip. Render as `<Badge>` + an inline X button using `lucide-react` (already on cdnjs):

```tsx
<Badge variant="secondary" className="gap-1 pr-1">
  Filter A
  <button onClick={remove} className="ml-1 rounded-full hover:bg-foreground/10 p-0.5">
    <X size={12} />
  </button>
</Badge>
```

For a non-removable chip, drop the button — it's just `<Badge variant="secondary">`.

---

### 11. Divider — `sg-divider`

shadcn `<Separator>` directly. Orientation prop matches DSC:

```tsx
<Separator />                          {/* horizontal */}
<Separator orientation="vertical" />
```

---

### 12. Alert — `sg-alert`

shadcn ships `default | destructive`. The two missing variants use `.sg-status-*`:

| DSC variant | shadcn recipe |
|---|---|
| `info`    | `<Alert className="sg-status-info">` |
| `success` | `<Alert className="sg-status-success">` |
| `warning` | `<Alert className="sg-status-warning">` |
| `error`   | `<Alert variant="destructive">` |

Use `lucide-react` icons inside (Info, CheckCircle2, AlertTriangle, AlertCircle):

```tsx
<Alert className="sg-status-success">
  <CheckCircle2 className="h-4 w-4" />
  <AlertTitle>Saved</AlertTitle>
  <AlertDescription>Changes persisted.</AlertDescription>
</Alert>
```

---

### 13. Progress — `sg-progress`

shadcn `<Progress>` directly for determinate. shadcn has no indeterminate variant — for that, use a thin custom div with a Tailwind animation:

```tsx
<Progress value={66} />

{/* indeterminate */}
<div className="h-1 w-full overflow-hidden rounded-full bg-muted">
  <div className="h-full w-1/3 animate-[indeterminate_1.2s_ease-in-out_infinite] bg-primary" />
</div>
{/* paired with: @keyframes indeterminate { 0%{transform:translateX(-100%)} 100%{transform:translateX(300%)} } */}
```

---

### 14. Spinner — `sg-spinner`

shadcn doesn't ship a spinner. Use `lucide-react`'s `Loader2` with `animate-spin`:

```tsx
import { Loader2 } from 'lucide-react';
<Loader2 className="h-6 w-6 animate-spin text-primary" />
```

Sizes: `h-4 w-4` (sm), `h-6 w-6` (md), `h-8 w-8` (lg).

---

### 15. Tabs — `sg-tabs`

shadcn `<Tabs>` + `<TabsList>` + `<TabsTrigger>` + `<TabsContent>`. DSC's data-driven `.tabs` array maps to mapping over the labels:

```tsx
<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">…</TabsContent>
  <TabsContent value="analytics">…</TabsContent>
</Tabs>
```

---

### 16. Accordion — `sg-accordion-item`

shadcn `<Accordion>` + `<AccordionItem>` + `<AccordionTrigger>` + `<AccordionContent>`. DSC's single-item form maps to a one-item accordion with `type="single" collapsible`:

```tsx
<Accordion type="single" collapsible defaultValue="q1">
  <AccordionItem value="q1">
    <AccordionTrigger>What is this?</AccordionTrigger>
    <AccordionContent>Body content.</AccordionContent>
  </AccordionItem>
</Accordion>
```

---

### 17. Modal — `sg-modal`

shadcn `<Dialog>` directly. Backdrop-click-closes is the default behavior. For destructive flows, swap to `<AlertDialog>`:

```tsx
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    <DialogHeader><DialogTitle>Confirm</DialogTitle></DialogHeader>
    <p>Are you sure?</p>
    <DialogFooter>
      <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
      <Button variant="destructive" onClick={confirm}>Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## Anti-patterns

- ❌ `<Button className="bg-red-600">` — the brand layer already routes primary to sg-red 50. Just use `<Button>`.
- ❌ Composing alert colors with `bg-green-100 text-green-800` — use `<Alert className="sg-status-success">`.
- ❌ Reaching for `--primary`, `--background`, etc. directly — those exist for shadcn primitives. Layout CSS uses `--sg-*` tokens.
- ❌ Importing icons from anywhere other than `lucide-react` — keeps the artifact CDN footprint to one source.
- ❌ Hand-rolling a chip / spinner / form-field "because shadcn doesn't have it" without checking this doc — every gap has a recipe above.

---

## Open question for the MCP wire-up

The brand layer (`brand-overrides.css`) is small enough (~3kB) that the MCP can inline it verbatim like the previous WC-bundle approach. Whether this doc gets injected as a system-prompt section or just summarized into the artifact-Claude's instructions is a Claude-van-Context call — both forms work, the trade is prompt size vs. fidelity of the recipes.
