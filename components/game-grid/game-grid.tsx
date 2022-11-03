import styles from "./game-grid.module.css";
import Link from "next/link";

export default function GameGrid() {
  const names = [
    "Snake",
    "Pong",
    "Breakout",
    "Space Invaders",
    "Chess",
    "Idk man",
  ];
  return (
    <>
      <div className={styles.grid}>
        {names.map((name) => {
          return (
            <Link key={name} href={`/games/${name}`} className={styles.card}>
              {name}
            </Link>
          );
        })}
      </div>
    </>
  );
}
