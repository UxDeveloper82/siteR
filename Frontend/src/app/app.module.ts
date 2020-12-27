import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertifyService } from './_services/alertify.service';
import { UploadImageService } from './_services/upload-image.service';
import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './_services/auth.service';
import { PortService } from './_services/port.service';
import { MyblogService } from './_services/myblog.service';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ListsResolver } from './_resolvers/lists.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { PortEditResolver } from './_resolvers/port-edit.resolver';
import { PortDetailResolver } from './_resolvers/port-detail.resolver';
import { BlogListResolver } from './_resolvers/blog-list.resolver';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { FileUploadModule } from 'ng2-file-upload';
import { TimeagoModule } from 'ngx-timeago';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MessagesResolver } from './_resolvers/messages.resolver';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { BlogListComponent } from './myblog/blog-list/blog-list.component';
import { PortfolioListComponent } from './myportfolio/portfolio-list/portfolio-list.component';
import { ContactComponent } from './contact/contact.component';
import { MymessagesComponent } from './mymessages/mymessages.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import { ToolsComponent } from './tools/tools.component';
import { LinksComponent } from './links/links.component';
import { LoginComponent } from './login/login.component';
import { PortfolioDetailComponent } from './myportfolio/portfolio-detail/portfolio-detail.component';
import { PanelComponent } from './panel/panel.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BlogDetailComponent } from './myblog/blog-detail/blog-detail.component';
import { BlogNewComponent } from './myblog/blog-new/blog-new.component';
import { PortfolioUpdateComponent } from './myportfolio/portfolio-update/portfolio-update.component';
import { PortfolioNewComponent } from './myportfolio/portfolio-new/portfolio-new.component';
import { ListsComponent } from './lists/lists.component';
import { MemberMessagesComponent } from './members/member-messages/member-messages.component';
import { MessagesComponent } from './messages/messages.component';
import { CommunityComponent } from './community/community.component';
import { RegisterComponent } from './register/register.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { HasRoleDirective } from './_directives/hasRole.directive';
import { PhotoManagementComponent } from './admin/photo-management/photo-management.component';
import { RolesModalComponent } from './admin/roles-modal/roles-modal.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { AdminService } from './_services/admin.service';
import { PortfolioCardComponent } from './myportfolio/portfolio-card/portfolio-card.component';

// tslint:disable-next-line: typedef
export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    BlogListComponent,
    PortfolioListComponent,
    ContactComponent,
    MymessagesComponent,
    MemberListComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent,
    PhotoEditorComponent,
    ToolsComponent,
    LinksComponent,
    LoginComponent,
    PortfolioDetailComponent,
    PanelComponent,
    SideNavComponent,
    BlogDetailComponent,
    BlogNewComponent,
    PortfolioUpdateComponent,
    PortfolioNewComponent,
    ListsComponent,
    MemberMessagesComponent,
    MessagesComponent,
    CommunityComponent,
    RegisterComponent,
    AdminPanelComponent,
    HasRoleDirective,
    PhotoManagementComponent,
    RolesModalComponent,
    UserManagementComponent,
    PortfolioCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    NgxGalleryModule,
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    TimeagoModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        // tslint:disable-next-line:object-literal-shorthand
        tokenGetter: tokenGetter,
        allowedDomains: ['http://icreatesites4u.com/'],
        disallowedRoutes:  ['http://icreatesites4u.com/api/auth']
      }
    })

  ],
  providers: [
    AlertifyService,
    AuthService,
    PortService,
    MyblogService,
    AuthGuard,
    UploadImageService,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    BlogListResolver,
    PortEditResolver,
    ErrorInterceptorProvider,
    PreventUnsavedChanges,
    ListsResolver,
    PortDetailResolver,
    MessagesResolver,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
