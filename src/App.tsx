import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Lawyers from "./pages/Lawyers";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Chinese from "./pages/Chinese";
import Korean from "./pages/Korean";
import NotFound from "./pages/NotFound";

// Service pages
import AdministrativeLaw from "./pages/services/AdministrativeLaw";
import LitigationADR from "./pages/services/LitigationADR";
import BankingFinance from "./pages/services/BankingFinance";
import ConstructionEngineering from "./pages/services/ConstructionEngineering";
import CorporateCommercial from "./pages/services/CorporateCommercial";
import CriminalLaw from "./pages/services/CriminalLaw";
import DebtRecovery from "./pages/services/DebtRecovery";
import Employment from "./pages/services/Employment";
import FamilyLaw from "./pages/services/FamilyLaw";
import InsolvencyLiquidation from "./pages/services/InsolvencyLiquidation";
import Insurance from "./pages/services/Insurance";
import IntellectualProperty from "./pages/services/IntellectualProperty";
import RealEstateConveyancing from "./pages/services/RealEstateConveyancing";
import TrustEstates from "./pages/services/TrustEstates";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lawyers" element={<Lawyers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chinese" element={<Chinese />} />
          <Route path="/korean" element={<Korean />} />
          
          {/* Service detail pages */}
          <Route path="/services/administrative-law" element={<AdministrativeLaw />} />
          <Route path="/services/litigation-adr" element={<LitigationADR />} />
          <Route path="/services/banking-finance" element={<BankingFinance />} />
          <Route path="/services/construction-engineering" element={<ConstructionEngineering />} />
          <Route path="/services/corporate-commercial" element={<CorporateCommercial />} />
          <Route path="/services/criminal-law" element={<CriminalLaw />} />
          <Route path="/services/debt-recovery" element={<DebtRecovery />} />
          <Route path="/services/employment" element={<Employment />} />
          <Route path="/services/family-law" element={<FamilyLaw />} />
          <Route path="/services/insolvency-liquidation" element={<InsolvencyLiquidation />} />
          <Route path="/services/insurance" element={<Insurance />} />
          <Route path="/services/intellectual-property" element={<IntellectualProperty />} />
          <Route path="/services/real-estate-conveyancing" element={<RealEstateConveyancing />} />
          <Route path="/services/trust-estates" element={<TrustEstates />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
