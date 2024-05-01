export default function genID(low = 10000, high = 20000): number {
  return low + Math.floor(Math.random() * (high - low));
}
