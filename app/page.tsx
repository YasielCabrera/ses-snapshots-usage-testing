"use client";

import styles from "./page.module.css";
import {
  AccountsSnapshot,
  AccountsSnapshotSkeleton,
  ResourceType,
  ThemeProvider,
} from "@yasiel.cabrera/ses-snapshots-library";
import { useEffect, useState } from "react";
import { snapshot_mock } from "./mock";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLight, setIsLight] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, []);

  return (
    <main className={styles.main}>
      <div>
        <button onClick={() => setIsLight(!isLight)}>
          Toggle Theme: {isLight ? "Light" : "Dark"}
        </button>
      </div>
      <ThemeProvider isLight={isLight}>
        {isLoading ? (
          <AccountsSnapshotSkeleton />
        ) : (
          <AccountsSnapshot
            resourceType={ResourceType.EcosystemActor}
            sinceDate={new Date("2021-01-01")}
            snapshotOwner="Mock Ecosystem Actor"
            snapshot={snapshot_mock}
          />
        )}
      </ThemeProvider>
    </main>
  );
}
