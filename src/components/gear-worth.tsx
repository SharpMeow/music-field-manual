import type { ReactNode } from "react";
import {
  PEDALS,
  RIG,
  VALUES_AS_OF,
  totalPaid,
  totalValue,
  unvalued,
  type GearValue,
} from "@/data/pedals";
import { cn } from "@/lib/utils";

const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function Depth({ depth }: { depth: GearValue["depth"] }) {
  const label = depth === "thick" ? "liquid" : depth === "thin" ? "thin" : "barely a market";
  return (
    <span
      className={cn(
        "rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest",
        depth === "thick"
          ? "border-ok/40 text-ok"
          : depth === "thin"
            ? "border-border text-muted"
            : "border-accent/40 text-accent",
      )}
    >
      {label}
    </span>
  );
}

function Row({
  name,
  sub,
  paidUsd,
  value,
}: {
  name: string;
  sub: string;
  paidUsd: number | null;
  value?: GearValue;
}) {
  const now = value?.typical ?? null;
  const delta = paidUsd != null && now != null ? now - paidUsd : null;

  return (
    <tr>
      <td className="px-3 py-2.5">
        <span className="font-medium text-fg">{name}</span>
        <span className="mt-0.5 block font-mono text-xs text-subtle">{sub}</span>
      </td>
      <td className="px-3 py-2.5 text-right font-mono text-sm text-muted">
        {paidUsd != null ? usd(paidUsd) : "—"}
      </td>
      <td className="px-3 py-2.5 text-right">
        {now != null ? (
          <>
            <span className="font-mono text-sm text-fg">{usd(now)}</span>
            {value?.low != null && value?.high != null ? (
              <span className="mt-0.5 block font-mono text-xs text-subtle">
                {usd(value.low)}–{usd(value.high)}
              </span>
            ) : null}
          </>
        ) : (
          <span className="font-mono text-sm text-subtle">not priceable</span>
        )}
      </td>
      <td className="px-3 py-2.5 text-right font-mono text-sm">
        {delta == null ? (
          <span className="text-subtle">—</span>
        ) : (
          <span className={delta >= 0 ? "text-ok" : "text-muted"}>
            {delta >= 0 ? "+" : "−"}
            {usd(Math.abs(delta))}
          </span>
        )}
      </td>
      <td className="px-3 py-2.5 text-right">{value ? <Depth depth={value.depth} /> : null}</td>
    </tr>
  );
}

function Table({
  caption,
  children,
}: {
  caption: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-left text-sm">
        <caption className="border-b border-border bg-elevated px-3 py-2 text-left font-mono text-xs uppercase tracking-widest text-muted">
          {caption}
        </caption>
        <thead className="bg-elevated font-mono text-xs uppercase tracking-widest text-muted">
          <tr>
            <th className="px-3 py-2.5 font-medium">Item</th>
            <th className="px-3 py-2.5 text-right font-medium">Paid</th>
            <th className="px-3 py-2.5 text-right font-medium">Worth now</th>
            <th className="px-3 py-2.5 text-right font-medium">Change</th>
            <th className="px-3 py-2.5 text-right font-medium">Market</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">{children}</tbody>
      </table>
    </div>
  );
}

export function GearWorth() {
  const all = [...PEDALS, ...RIG];
  const priced = all.filter((i) => i.value?.typical != null);
  const paid = totalPaid(all);
  const worth = totalValue(priced);
  const missing = unvalued(all);
  // Compare like with like: the change is over the priced items only.
  const delta = worth - totalPaid(priced);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-muted">
        What it cost against what it would fetch today. The third column is the number to put on
        an insurance schedule; the spread underneath is the range of current asking prices. Pay
        attention to the last column, because a figure drawn from two listings in the country is
        a guess in a good suit.
      </p>

      <Table caption="The board">
        {PEDALS.map((p) => (
          <Row
            key={p.id}
            name={`${p.brand} ${p.name}`}
            sub={`${p.kind} · ${p.bought}`}
            paidUsd={p.paidUsd}
            value={p.value}
          />
        ))}
      </Table>

      {RIG.length > 0 ? (
        <Table caption="The rest of the rig">
          {RIG.map((r) => (
            <Row
              key={r.id}
              name={r.name}
              sub={`${r.kind} · ${r.bought}`}
              paidUsd={r.paidUsd}
              value={r.value}
            />
          ))}
        </Table>
      ) : null}

      <div className="rounded-xl border border-border bg-surface p-5 shadow-panel">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Everything, together
          </p>
          <p className="font-mono text-xs text-subtle">checked {VALUES_AS_OF}</p>
        </div>
        <div className="mt-3 grid gap-4 sm:grid-cols-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-subtle">
              Paid, all {all.length}
            </p>
            <p className="mt-1 font-display text-3xl font-semibold tracking-tight">{usd(paid)}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-subtle">
              Worth now, the {priced.length} priced
            </p>
            <p className="mt-1 font-display text-3xl font-semibold tracking-tight">
              {priced.length > 0 ? usd(worth) : "not yet priced"}
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-subtle">
              Change on those {priced.length}
            </p>
            <p
              className={cn(
                "mt-1 font-display text-3xl font-semibold tracking-tight",
                priced.length === 0 ? "text-subtle" : delta >= 0 ? "text-ok" : "text-fg",
              )}
            >
              {priced.length > 0 ? `${delta >= 0 ? "+" : "−"}${usd(Math.abs(delta))}` : "—"}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          The two right-hand figures cover only the items that have a usable market figure, so
          they are never comparing a full shelf against a partial one.
          {missing > 0
            ? ` ${missing} ${missing === 1 ? "item is" : "items are"} left out: too few listings to say anything honest.`
            : ""}{" "}
          These are used-market numbers, which is what a policy pays out on and what a buyer
          would actually hand over. They are not replacement cost: several of these still sell
          new for more than the used figure, and one cannot be bought new at any price because
          the run is closed.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Checked once, on {VALUES_AS_OF}. Gear prices move. If this is going near an insurance
          schedule or a sale, re-check the two or three that matter rather than trusting a number
          in a website.
        </p>
      </div>
    </div>
  );
}
