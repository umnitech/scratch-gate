// T8 auto-fix probe — deliberate lint failure (unused variable).
// Expected: lint job RED (@typescript-eslint/no-unused-vars); build/test/gitleaks GREEN.
export function probeValue(): string {
  return 'T8 auto-fix probe';
}
