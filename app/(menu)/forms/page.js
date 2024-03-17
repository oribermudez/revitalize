import { AppStateProvider } from '../../global-state/AppStateContext';
import FormList from "@/app/components/FormList";


const Forms = () => {

  return (
    <AppStateProvider>
      <div className="col-span-4 min-w-screen min-h-screen p-8 mt-20">
        <h2 className="text-[#2D4635] font-bold text-xl">
          Forms
        </h2>
        <FormList/>
      </div>
    </AppStateProvider>
  );
};

export default Forms;