import { createContext, useContext, useState } from "react";

const MusicVaultContext = createContext();

export default function MusicVaultProvider({ children }) {
  const [musicVault, setMusicVault] = useState(
    JSON.parse(localStorage.getItem("musicVault")) || []
  );
  
  return (
    <MusicVaultContext.Provider value={{ musicVault, setMusicVault }}>
      {children}
    </MusicVaultContext.Provider>
  );
}

export function useMusicVault() {
  const { musicVault, setMusicVault } = useContext(MusicVaultContext);

  function contains(id) {
    return musicVault.includes(id);
  }

  function add(itemToAdd) {
    setMusicVault((prevValue) => {
      const newValue = [...prevValue, itemToAdd];
      localStorage.setItem("musicVault", JSON.stringify(newValue));
      return newValue;
    });
  }

  function remove(itemToRemove) {
    setMusicVault((prevValue) => {
      const newValue = prevValue.filter((item) => item.id !== itemToRemove.id);
      localStorage.setItem("musicVault", JSON.stringify(newValue));
      return newValue;
    });
  }

  return { musicVault, setMusicVault, contains, add, remove };
}