import EmptyVault from "./components/EmptyVault";
import VaultItem from "./components/VaultItem";

export default function MusicVault({ data }) {
  if(data.length === 0) {
    return (
      <EmptyVault/>
    );
  } else {
    return (
      <div className="h-0 w-full grow overflow-y-auto">
        {data.map((item) => (
          <VaultItem key={item.vaultId} data={item}/>
        ))}
      </div>
    );
  }
}