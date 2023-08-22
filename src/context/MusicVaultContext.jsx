import { createContext, useContext, useState } from "react";

const MusicVaultContext = createContext();

export default function MusicVaultProvider({ children }) {
  const [musicVault, setMusicVault] = useState(
    JSON.parse(localStorage.getItem("musicVault")) || []
  );

  console.log(musicVault);
  
  return (
    <MusicVaultContext.Provider value={{ musicVault, setMusicVault }}>
      {children}
    </MusicVaultContext.Provider>
  );
}

export function useMusicVault() {
  const { musicVault, setMusicVault } = useContext(MusicVaultContext);

  function contains(item) {
    return musicVault.some((vaultItem) => vaultItem.vaultId === `${item.id}-${item.type}`);
  }

  function add(itemToAdd) {
    setMusicVault((prevValue) => {
      const newValue = [...prevValue, {
        ...itemToAdd,
        vaultId: `${itemToAdd.id}-${itemToAdd.type}`
      }];
      localStorage.setItem("musicVault", JSON.stringify(newValue));
      return newValue;
    });
  }

  function remove(itemToRemove) {
    setMusicVault((prevValue) => {
      const newValue = prevValue.filter((item) => item.vaultId !== `${itemToRemove.id}-${itemToRemove.type}`);
      localStorage.setItem("musicVault", JSON.stringify(newValue));
      return newValue;
    });
  }

  return { musicVault, setMusicVault, contains, add, remove };
}