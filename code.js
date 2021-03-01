function rollUp(){
   document.getElementById("sidebarBig").classList.toggle('active');
   document.getElementById("sidebarSmall").classList.toggle('active');
}

function OpenMenuOne(){
   document.getElementById("Create").classList.toggle('Active_Create');
   document.getElementById("Application").classList.remove('Active_Create');
   document.getElementById("Alerts").classList.remove('Active_Create');
   document.getElementById("Account").classList.remove('Active_Create');
}

function OpenMenuTwo(){
   document.getElementById("Application").classList.toggle('Active_Create')
   document.getElementById("Create").classList.remove('Active_Create');
   document.getElementById("Alerts").classList.remove('Active_Create');
   document.getElementById("Account").classList.remove('Active_Create');
}

function OpenMenuThree(){
   document.getElementById("Alerts").classList.toggle('Active_Create');
   document.getElementById("Create").classList.remove('Active_Create');
   document.getElementById("Application").classList.remove('Active_Create');
   document.getElementById("Account").classList.remove('Active_Create');
}

function OpenMenuFour(){
   document.getElementById("Account").classList.toggle('Active_Create');
   document.getElementById("Create").classList.remove('Active_Create');
   document.getElementById("Application").classList.remove('Active_Create');
   document.getElementById("Alerts").classList.remove('Active_Create');
}

function OpenAccountMenu(){
   document.getElementById("Account").classList.toggle('Active_Create');
   document.getElementById("AccountMenu_one").classList.toggle('Active_Create')
}

function OpenSafeModeMenu(){
   document.getElementById("Account").classList.toggle('Active_Create');
   document.getElementById("SafeModeMenu").classList.toggle('Active_Create')
}

function ActiveSafeMode(){
   document.getElementById("ActiveSafeMode").classList.toggle('SafeMode-Active')
}

function OpenThemeMenu(){
   document.getElementById("Account").classList.toggle('Active_Create');
   document.getElementById("ThemeMenu").classList.toggle('Active_Create')
}

function DeviceMark(){
   document.getElementById("mark").style.top="46%";
}

function DarkMark(){
   document.getElementById("mark").style.top="63.5%";
}

function WhiteMark(){
   document.getElementById("mark").style.top="82%";
}

function ColorChange(){
   document.getElementsByClassName()
}

function TitleCamera(){
   document.getElementById("Title_CameraIcon").classList.toggle('Title_Active');
}

function TitleApplication(){
   document.getElementById("Title_Application").classList.toggle('Title_Active');
}

function TitleAlerts(){
   document.getElementById("Title_Alerts").classList.toggle('Title_Active');
}

function MenuHeader(){
   document.getElementById("Phone_menu").classList.toggle('Active');
   document.getElementById("Phone_one").classList.toggle("Active-Phone");
   document.getElementById("Phone_two").classList.toggle("Active");
   document.getElementById("Phone_three").classList.toggle("Active-Phone");
}

function ActiveDot(){
   document.getElementById("TalkMenu").classList.toggle('Active')
   document.getElementById("First-dot").classList.toggle('Active-dot');
   document.getElementById("Second-dot").classList.toggle('Active-dot');
   document.getElementById("Threth-dot").classList.toggle('Active-dot');
}

function ActiveLoupe(){
   document.getElementById("loupe_title").classList.toggle('Active-Loupe');
   document.getElementById("Loupe_circle").classList.toggle('Active-loupe');
   document.getElementById("Loupe_line").classList.toggle('Active-LoupeOne');
}

function PhotoActive(){
   document.getElementById("Photo-two").classList.toggle('PhotoBlockTwo-active');
   document.getElementById("Photo-three").classList.toggle('PhotoBlockThree-active');
   document.getElementById("Photo-four").classList.toggle('PhotoBlockFour-active');
   document.getElementById("Photo-one").classList.toggle('PhotoBlockOne-active');
   document.getElementById("Photo-circle").classList.toggle('PhotoCircleBlock-active');
   document.getElementById("title_photo").classList.toggle('Active-Photo');
}

function VoiceActive(){
   document.getElementById("VoiceOne").classList.toggle('VoiceOne-Active');
   document.getElementById("VoiceTwo").classList.toggle('VoiceTwo-Active');
   document.getElementById("VoiceThree").classList.toggle('VoiceThree-Active');
   document.getElementById("title_voice").classList.toggle('Active-Voice');
}

function SmileActive(){
   document.getElementById("smile_active").classList.toggle('Smile-Active');
   document.getElementById("mouthActive").classList.toggle('Mouth-Active');
   document.getElementById("eye_one_active").classList.toggle('Eye-Active');
   document.getElementById("eye_two_active").classList.toggle('Eye-Active');
   document.getElementById("menu_smile").classList.toggle('menu_smile-active');
}

function clipActive(){
   document.getElementById("ClipOne").classList.toggle('clip_one-Active');
   document.getElementById("ClipTwo").classList.toggle('clip_two-Active');
   document.getElementById("ClipThree").classList.toggle('clip_one-Active');
   document.getElementById("Menu_clip").classList.toggle('clip_menu-active');
}

function videoRecordActive(){
   document.getElementById("record_one").classList.toggle('border-icon-active');
   document.getElementById("record_two").classList.toggle('border_left_bottom_two-icon-active');
   document.getElementById("record_three").classList.toggle('bc-icon-active');
}

function photoActive(){
   document.getElementById("photo-two").classList.toggle('border_left_right_bottom_two-icon-active');
   document.getElementById("photo-three").classList.toggle('border_left_top_two-icon-active');
   document.getElementById("photo-four").classList.toggle('border_right_top_two-icon-active');
   document.getElementById("photo-one").classList.toggle('border_top_two-icon-active');
   document.getElementById("photo-circle").classList.toggle('border-icon-active');
}

function MapActive(){
   document.getElementById("map_base").classList.toggle('border-icon-active');
   document.getElementById("map_circle").classList.toggle('border-icon-active');
}

function FailActive(){
   document.getElementById("fail_up_right").classList.toggle('border_right_bottom_two-icon-active');
   document.getElementById("fail_line").classList.toggle('bc-icon-active');
   document.getElementById("fail_down_right").classList.toggle('border_right_top_two-icon-active');
   document.getElementById("fail_down").classList.toggle('border_top_two-icon-active');
}

function MoneyActive(){
   document.getElementById("money_up-active").classList.toggle('border_bottom_two-icon-active');
   document.getElementById("money_up_line-active").classList.toggle('bc-icon-active');
   document.getElementById("money_down-active").classList.toggle('border_right_top_two-icon-active');
   document.getElementById("money_arrow-active").classList.toggle('border_right_top_two-icon-active');
   document.getElementById("money_circle-active").classList.toggle('bc-icon-active');
}

function PresentActie(){
   document.getElementById("present_bow_right-active").classList.toggle('border-icon-active');
   document.getElementById("present_bow_left-active").classList.toggle('border-icon-active');
   document.getElementById("present_line-active").classList.toggle('bc-icon-active');
   document.getElementById("present_mid-acitve").classList.toggle('border-icon-active');
   document.getElementById("present_down-active").classList.toggle('border_top_two-icon-active');
}

function MusicActive(){
   document.getElementById("music_base").classList.toggle('border_bottom_two-icon-active');
   document.getElementById("music_line").classList.toggle('bc-icon-active');
   document.getElementById("music_drop_one").classList.toggle('border_one_six-icon-active');
   document.getElementById("music_drop_two").classList.toggle('border_one_six-icon-active');
}

function loupeActive(){
   document.getElementById("loupe_lens-act").classList.toggle('border-icon-active');
   document.getElementById("loupe_line-act").classList.toggle('bc-icon-active');
}

function ClipActiveTalk(){
   document.getElementById("clip_talk_one").classList.toggle('border_right_two-icon-active');
   document.getElementById("clip_talk_two").classList.toggle('border_top_right_bottom_two-icon-active');
   document.getElementById("clip_talk_three").classList.toggle('border_right_two-icon-active');
}

function buttonActive(){
   document.getElementById("up_line_handle").classList.toggle('bc-icon-active');
   document.getElementById("up_line_handle_two").classList.toggle('bc-icon-active');
   document.getElementById("up_line_handle_three").classList.toggle('bc-icon-active');
   document.getElementById("line_right").classList.toggle('bc-icon-active');
   document.getElementById("line_left").classList.toggle('bc-icon-active');
   document.getElementById("down_line_handle").classList.toggle('bc-icon-active');
   document.getElementById("down_line_handle_two").classList.toggle('bc-icon-active');
   document.getElementById("down_line_handle_three").classList.toggle('bc-icon-active');
   document.getElementById("button_line_needle").classList.toggle('bc-icon-active');
}

function TrashActive(){
   document.getElementById("up_trash_block").classList.toggle('bc-icon-active');
   document.getElementById("trash_block_right").classList.toggle('border_left_top_two-icon-active');
   document.getElementById("trash_block_left").classList.toggle('border_right_top_two-icon-active');
   document.getElementById("up_trash_base_block").classList.toggle('border_top_two-icon-active');
   document.getElementById("down_trash_block").classList.toggle('border_top_two-icon-active');
}

function NoticeActive(){
   document.getElementById("notice_line_one").classList.toggle('bc-icon-active');
   document.getElementById("notice_line_two").classList.toggle('bc-icon-active');
   document.getElementById("notice_line_three").classList.toggle('bc-icon-active');
   document.getElementById("notice_base_line_one").classList.toggle('bc-icon-active');
   document.getElementById("notice_block").classList.toggle('border_right_two-icon-active');
   document.getElementById("notice_down_line_one").classList.toggle('bc-icon-active');
   document.getElementById("notice_down_line_two").classList.toggle('bc-icon-active');
}

function AddActive(){
   document.getElementById("add_main_block_one").classList.toggle('border_right_bottom_noTwo-icon-active');
   document.getElementById("add_main_block_two").classList.toggle('border_right_top_noTwo-icon-active');
   document.getElementById("add_main_block_three").classList.toggle('border_left_top_noTwo-icon-active');
   document.getElementById("add_main_block_four").classList.toggle('border_left_bottom_noTwo-icon-active');
   document.getElementById("add_block_one").classList.toggle('bc-icon-active');
   document.getElementById("add_block_two").classList.toggle('bc-icon-active');
   document.getElementById("add_triagle").classList.toggle('border_left_top_noTwo-icon-active');
   document.getElementById("add_triagle_two").classList.toggle('bc-icon-active');
}

function MarkActive(){
   document.getElementById("mark_one").classList.toggle('border_right_bottom_noTwo-icon-active');
   document.getElementById("mark_one_one").classList.toggle('border_right_top_noTwo-icon-active');
   document.getElementById("mark_circle").classList.toggle('bc-icon-active');
   document.getElementById("mark_two").classList.toggle('border_left_top_noTwo-icon-active');
   document.getElementById("mark_triagle_one").classList.toggle('bc-icon-active');
   document.getElementById("mark_triagle_two").classList.toggle('border_left_top_noTwo-icon-active');
}

function SmileButtonActive(){
   document.getElementById("smile_button").classList.add('button_base');
   document.getElementById("favorites_button").classList.remove('button_base');
   document.getElementById("time_button").classList.remove('button_base');
}

function FavoritesButtonActive(){
   document.getElementById("favorites_button").classList.add('button_base');
   document.getElementById("smile_button").classList.remove('button_base');
   document.getElementById("time_button").classList.remove('button_base');
}

function TimeButtonActive(){
   document.getElementById("time_button").classList.add('button_base');
   document.getElementById("favorites_button").classList.remove('button_base');
   document.getElementById("smile_button").classList.remove('button_base');
}

function PhoneAudioActive(){
   document.getElementById("PhoneBlockOne_Audio").classList.toggle('bc-icon-active');
   document.getElementById("PhoneBlockTwo_Audio").classList.toggle('border_top_three-icon-active');
   document.getElementById("PhoneBlockThree_Audio").classList.toggle('bc-icon-active');
}

function VideoActive(){
   document.getElementById("Base_video").classList.toggle('border-icon-active');
   document.getElementById("line_video_one").classList.toggle('bc-icon-active');
   document.getElementById("line_video_two").classList.toggle('bc-icon-active');
   document.getElementById("line_video_three").classList.toggle('bc-icon-active');
}

function ScrollRight(){
   document.getElementById("stikers_base_block").scrollRight(50);
}

function ActiveCreateIcon(){
   document.getElementById("LineOne").classList.toggle('Line_Create_two-active');
   document.getElementById("LineTwo").classList.toggle('Line_Create_one-active');
   document.getElementById("LineThree").classList.toggle('Line_Create_two-active');
   document.getElementById("LineFour").classList.toggle('Line_Create_one-active');
}

function OpenLanguaguMenu(){
   document.getElementById("Account").classList.toggle('Active_Create');
   document.getElementById("LanguaguMenu").classList.toggle('Active_Create');
}

function OpenCountryMenu(){
   document.getElementById("Account").classList.toggle('Active_Create');
   document.getElementById("CountryMenu").classList.toggle('Active_Create')
}

function TitleAlertsLogo(){
   document.getElementById("alert_logo_title").classList.toggle('alerts_logo_title-active')
}

function ShopButtonActive(){
   document.getElementById("shop_button").classList.toggle('shop_button-active');
   document.getElementById("triagle_smile").classList.toggle('shop_button-active');
}