import React from 'react';
import Log from 'classes/Log';

type MainContextType = {
  logList: Log[];
  addLog: (log: Log) => void;
};

const MainContext = React.createContext<MainContextType>({} as MainContextType);

type MainProviderProps = {
  children: React.ReactNode;
};

export const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  const [logList, setLogList] = React.useState<Log[]>([]);
  const addLog = (log: Log) => {
    if (log.position === 'start') {
      setLogList([log, ...logList]);
    } else {
      setLogList([...logList, log]);
    }
  };
  const mainContextValue = React.useMemo(
    () => ({
      logList, addLog,
    }),
    [logList],
  );

  return <MainContext.Provider value={mainContextValue}>{children}</MainContext.Provider>;
};

export default MainContext;
