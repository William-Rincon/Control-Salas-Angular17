import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DocentesComponent } from './pages/docentes/docentes.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'admin', component: AdminComponent},
    { path: 'docente', component: DocentesComponent },
    { path: 'reportes', component: ReportesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'lateral', component: HeaderComponent },
    { path: 'prueba', component: FooterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
