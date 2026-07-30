 
(function(){
  "use strict";

  /* =========================================================
     i18n
  ========================================================= */

  var LANGS = ["en","vi","es","fr","de","pt","ja","ko","zh","ru","hi","id"];
  var LANG_NAMES = { en:"English", vi:"Tiáº¿ng Viá»‡t", es:"EspaÃ±ol", fr:"FranÃ§ais", de:"Deutsch", pt:"PortuguÃªs", ja:"æ—¥æœ¬èªž", ko:"í•œêµ­ì–´", zh:"ä¸­æ–‡", ru:"Ð ÑƒÑÑÐºÐ¸Ð¹", hi:"à¤¹à¤¿à¤¨à¥à¤¦à¥€", id:"Bahasa Indonesia" };

  var STRINGS = {
    en:{ tagline:"things done â€” not things planned", level:"LEVEL", ap:"AP", streak:"day streak",
      stats:"Statistics", todo:"To-Do", hint:"No pressure, just progress. What did you complete today?",
      tabOverview:"Overview", tabHistory:"History", tabDaily:"Daily", statsTitle:"STATISTICS",
      overviewEmpty:"The repository is empty. Type /add <task> to start logging.",
      overviewSummary:"{count} tracked task(s) Â· {ap} total AP",
      colTask:"Task", colCount:"Count", colTotalAp:"Total AP", colDate:"Date", colTime:"Time", colAp:"AP",
      searchPlaceholder:"Search by task nameâ€¦", clearFilters:"Clear filters", noMatch:"No entries match this search.",
      dailyEntries:"ENTRIES", dailyEmpty:"No actions logged on this day.", freqTitle:"FREQUENCY",
      todoAddPlaceholder:"Add a taskâ€¦", todoEmpty:"Nothing here yet. Add your first task above.",
      diffEasy:"Easy", diffNormal:"Normal", diffHard:"Hard",
      tabSync:"Sync", tabAchievements:"Achievements", tabLanguage:"Language",
      syncIntro:"Connect an account to sync your data across devices.",
      syncSoon:"Cloud sync is coming in a future update. For now, use Export / Import to move your data between devices.",
      syncGoogle:"Continue with Google", syncGithub:"Continue with GitHub", syncApple:"Continue with Apple", syncEmail:"Continue with Email",
      achIntro:"Reach these levels to unlock them.", achLocked:"Locked",
      langIntro:"Choose your language. Everything switches â€” every screen, every message.",
      soundLabel:"Sound", vibLabel:"Vibration", volLabel:"Volume", close:"Close",
      bootMsg:"Session started â€” Acta v3.6.3", philMsg:"Philosophy: things done, not things planned. No schedule, only recognition.",
      helpMsg:"Type /help for the command list, or just type what you did.", helpHeader:"COMMAND LIST",
      unknownCmd:"Unknown command: \"{cmd}\". Type /help for the command list.",
      addUsage:"Usage: /add <task>", addInvalid:"That task name isn't valid.",
      addExisting:"+1 AP â€” \"{task}\" (occurrence #{count})", addNew:"New task registered: \"{task}\" (+1 AP)",
      delUsage:"Usage: /del <task>", delOk:"Removed \"{task}\" from the repository.", delNotFound:"\"{task}\" was not found in the repository.",
      clearedMsg:"Feed cleared. Your data is untouched.", exportedMsg:"Backup file downloaded.",
      importedMsg:"Data imported from \"{file}\".", importFailed:"Import failed: the file isn't valid JSON.", importReadFail:"Import failed: could not read the file.",
      undidMsg:"Undid the last action.", redidMsg:"Redid the last undone action.",
      todoDoneMsg:"Completed \"{task}\" (+{ap} AP) Â· To-Do", levelUp:"Level {level}!", nicedBtn:"Nice!", account:"Account",
      cmdAdd:"Log an action. Existing task adds AP and increments its count; a new one registers automatically.",
      cmdDel:"Remove a task from the repository.", cmdList:"Open Statistics.", cmdExport:"Download a backup of your data as JSON.",
      cmdImport:"Load data from a backup JSON file.", cmdUndo:"Undo the last action.", cmdRedo:"Redo the last undone action.",
      cmdTheme:"Toggle light / dark theme.", cmdClear:"Clear the feed. Your data is kept.", cmdHelp:"Show this list again.",
      dataLabel:"Data", eraseData:"Erase all data", eraseConfirmMsg:"This will permanently delete all your AP, tasks, history and to-dos. This cannot be undone.",
      erasedMsg:"All data erased.", cancelBtn:"Cancel", confirmBtn:"Erase", restoreHint:"Use Import to restore from a backup.",
      apTooltip:"AP = Acta Point, earned by completing actions. Level is calculated from your total AP on an RPG-style curve â€” reach milestone levels for a small celebration.",
      syncedAs:"Signed in as {email}", signOut:"Sign out", continueBtn:"Continue", syncFillFields:"Enter both email and password.",
      syncActiveNote:"Your data now syncs automatically across your devices while signed in.",
      syncConflictMsg:"This account already has data saved from another device. Which would you like to keep?",
      syncKeepDevice:"Keep this device", syncUseCloud:"Use cloud data", syncUnavailable:"Sync isn't available right now â€” check your connection.",
      todayLabel:"done today", shortcutsHeader:"KEYBOARD SHORTCUTS", scFocus:"Focus the input", scEsc:"Close dialogs", scUndo:"Undo", scRedo:"Redo",
      scExport:"Export backup", scImport:"Import backup", scStats:"Open Statistics", scTheme:"Toggle theme", monthlyTitle:"MONTHLY FREQUENCY",
      exportJsonLabel:"Export JSON", exportPdfLabel:"Export PDF", navActaCard:"Acta Card",
      profileNameLabel:"Name", profileNamePlaceholder:"Your name", profileBioLabel:"Bio", profileBioPlaceholder:"Tell us about yourselfâ€¦",
      profileCountryLabel:"Country", profileCountryPlaceholder:"Your country", changeAvatarLabel:"Tap to change photo",
      firstRunTitle:"Save your journey", firstRunMsg:"Sign in to keep your actions, streaks, and progress safe across every device.",
      firstRunSignIn:"Sign in", firstRunLater:"Maybe later",
      actaCardDownload:"Download Card", actaCardTasksDone:"Tasks done", actaCardMaxStreak:"Max streak", actaCardLinkProfile:"Profile link",
      actaCardThankYou:"Thank you", actaCardNeedSignIn:"Sign in to generate your Acta Card", actaCardVerified:"Verified",
      publicProfileNotFound:"Profile not found", publicProfileTryActa:"Try Acta yourself", publicProfileLoading:"Loading profileâ€¦",
      settingsTitle:"Settings", pdfUnavailable:"PDF export needs an internet connection to load â€” try again once you're online." },

    vi:{ tagline:"viá»‡c Ä‘Ã£ lÃ m â€” khÃ´ng pháº£i viá»‡c Ä‘Ã£ Ä‘á»‹nh", level:"Cáº¤P", ap:"AP", streak:"ngÃ y liÃªn tiáº¿p",
      stats:"Thá»‘ng kÃª", todo:"Viá»‡c cáº§n lÃ m", hint:"KhÃ´ng Ã¡p lá»±c, chá»‰ cÃ³ tiáº¿n bá»™. HÃ´m nay báº¡n Ä‘Ã£ hoÃ n thÃ nh gÃ¬?",
      tabOverview:"Tá»•ng quan", tabHistory:"Lá»‹ch sá»­", tabDaily:"Theo ngÃ y", statsTitle:"THá»NG KÃŠ",
      overviewEmpty:"Kho trá»‘ng. GÃµ /add <viá»‡c> Ä‘á»ƒ báº¯t Ä‘áº§u ghi nháº­n.",
      overviewSummary:"{count} viá»‡c Ä‘ang theo dÃµi Â· {ap} AP",
      colTask:"Viá»‡c", colCount:"Sá»‘ láº§n", colTotalAp:"Tá»•ng AP", colDate:"NgÃ y", colTime:"Giá»", colAp:"AP",
      searchPlaceholder:"TÃ¬m theo tÃªn viá»‡câ€¦", clearFilters:"XÃ³a bá»™ lá»c", noMatch:"KhÃ´ng cÃ³ káº¿t quáº£ phÃ¹ há»£p.",
      dailyEntries:"CÃC Má»¤C", dailyEmpty:"KhÃ´ng cÃ³ hÃ nh Ä‘á»™ng nÃ o Ä‘Æ°á»£c ghi trong ngÃ y nÃ y.", freqTitle:"Táº¦N SUáº¤T",
      todoAddPlaceholder:"ThÃªm má»™t viá»‡câ€¦", todoEmpty:"ChÆ°a cÃ³ gÃ¬ á»Ÿ Ä‘Ã¢y. ThÃªm viá»‡c Ä‘áº§u tiÃªn á»Ÿ trÃªn.",
      diffEasy:"Dá»…", diffNormal:"BÃ¬nh thÆ°á»ng", diffHard:"KhÃ³",
      tabSync:"Äá»“ng bá»™", tabAchievements:"ThÃ nh tÃ­ch", tabLanguage:"NgÃ´n ngá»¯",
      syncIntro:"Káº¿t ná»‘i tÃ i khoáº£n Ä‘á»ƒ Ä‘á»“ng bá»™ dá»¯ liá»‡u qua nhiá»u thiáº¿t bá»‹.",
      syncSoon:"Äá»“ng bá»™ Ä‘Ã¡m mÃ¢y sáº½ cÃ³ trong báº£n cáº­p nháº­t sau. Hiá»‡n táº¡i, hÃ£y dÃ¹ng Export / Import Ä‘á»ƒ chuyá»ƒn dá»¯ liá»‡u giá»¯a cÃ¡c thiáº¿t bá»‹.",
      syncGoogle:"Tiáº¿p tá»¥c vá»›i Google", syncGithub:"Tiáº¿p tá»¥c vá»›i GitHub", syncApple:"Tiáº¿p tá»¥c vá»›i Apple", syncEmail:"Tiáº¿p tá»¥c vá»›i Email",
      achIntro:"Äáº¡t cÃ¡c cáº¥p nÃ y Ä‘á»ƒ má»Ÿ khÃ³a.", achLocked:"ÄÃ£ khÃ³a",
      langIntro:"Chá»n ngÃ´n ngá»¯. Má»i thá»© sáº½ Ä‘á»•i theo â€” má»i mÃ n hÃ¬nh, má»i thÃ´ng bÃ¡o.",
      soundLabel:"Ã‚m thanh", vibLabel:"Rung", volLabel:"Ã‚m lÆ°á»£ng", close:"ÄÃ³ng",
      bootMsg:"PhiÃªn lÃ m viá»‡c báº¯t Ä‘áº§u â€” Acta v3.6.3", philMsg:"Triáº¿t lÃ½: viá»‡c Ä‘Ã£ lÃ m, khÃ´ng pháº£i viá»‡c Ä‘Ã£ Ä‘á»‹nh. KhÃ´ng lá»‹ch trÃ¬nh, chá»‰ ghi nháº­n.",
      helpMsg:"GÃµ /help Ä‘á»ƒ xem danh sÃ¡ch lá»‡nh, hoáº·c gÃµ tháº³ng viá»‡c báº¡n Ä‘Ã£ lÃ m.", helpHeader:"DANH SÃCH Lá»†NH",
      unknownCmd:"Lá»‡nh khÃ´ng tá»“n táº¡i: \"{cmd}\". GÃµ /help Ä‘á»ƒ xem danh sÃ¡ch lá»‡nh.",
      addUsage:"CÃº phÃ¡p: /add <viá»‡c>", addInvalid:"TÃªn viá»‡c khÃ´ng há»£p lá»‡.",
      addExisting:"+1 AP â€” \"{task}\" (láº§n thá»© {count})", addNew:"ÄÃ£ ghi nháº­n viá»‡c má»›i: \"{task}\" (+1 AP)",
      delUsage:"CÃº phÃ¡p: /del <viá»‡c>", delOk:"ÄÃ£ xÃ³a \"{task}\" khá»i kho.", delNotFound:"KhÃ´ng tÃ¬m tháº¥y \"{task}\" trong kho.",
      clearedMsg:"ÄÃ£ dá»n mÃ n hÃ¬nh. Dá»¯ liá»‡u váº«n Ä‘Æ°á»£c giá»¯ nguyÃªn.", exportedMsg:"ÄÃ£ táº£i file backup.",
      importedMsg:"ÄÃ£ nháº­p dá»¯ liá»‡u tá»« \"{file}\".", importFailed:"Nháº­p tháº¥t báº¡i: file khÃ´ng Ä‘Ãºng Ä‘á»‹nh dáº¡ng JSON.", importReadFail:"Nháº­p tháº¥t báº¡i: khÃ´ng Ä‘á»c Ä‘Æ°á»£c file.",
      undidMsg:"ÄÃ£ hoÃ n tÃ¡c thao tÃ¡c vá»«a rá»“i.", redidMsg:"ÄÃ£ lÃ m láº¡i thao tÃ¡c vá»«a hoÃ n tÃ¡c.",
      todoDoneMsg:"ÄÃ£ hoÃ n thÃ nh \"{task}\" (+{ap} AP) Â· Viá»‡c cáº§n lÃ m", levelUp:"LÃªn cáº¥p {level}!", nicedBtn:"Tuyá»‡t!", account:"TÃ i khoáº£n",
      cmdAdd:"Ghi nháº­n 1 hÃ nh Ä‘á»™ng. Viá»‡c cÅ© +AP vÃ  tÄƒng sá»‘ láº§n; viá»‡c má»›i tá»± Ä‘Äƒng kÃ½.",
      cmdDel:"XÃ³a má»™t viá»‡c khá»i kho.", cmdList:"Má»Ÿ Thá»‘ng kÃª.", cmdExport:"Táº£i file backup dá»¯ liá»‡u dáº¡ng JSON.",
      cmdImport:"Nháº­p dá»¯ liá»‡u tá»« file backup JSON.", cmdUndo:"HoÃ n tÃ¡c thao tÃ¡c gáº§n nháº¥t.", cmdRedo:"LÃ m láº¡i thao tÃ¡c vá»«a hoÃ n tÃ¡c.",
      cmdTheme:"Chuyá»ƒn Ä‘á»•i giao diá»‡n sÃ¡ng / tá»‘i.", cmdClear:"Dá»n mÃ n hÃ¬nh. Dá»¯ liá»‡u váº«n Ä‘Æ°á»£c giá»¯.", cmdHelp:"Hiá»‡n láº¡i danh sÃ¡ch lá»‡nh.",
      dataLabel:"Dá»¯ liá»‡u", eraseData:"XÃ³a toÃ n bá»™ dá»¯ liá»‡u", eraseConfirmMsg:"Thao tÃ¡c nÃ y sáº½ xÃ³a vÄ©nh viá»…n toÃ n bá»™ AP, viá»‡c, lá»‹ch sá»­ vÃ  viá»‡c cáº§n lÃ m cá»§a báº¡n. KhÃ´ng thá»ƒ hoÃ n tÃ¡c.",
      erasedMsg:"ÄÃ£ xÃ³a toÃ n bá»™ dá»¯ liá»‡u.", cancelBtn:"Há»§y", confirmBtn:"XÃ³a", restoreHint:"DÃ¹ng Import Ä‘á»ƒ khÃ´i phá»¥c tá»« báº£n backup.",
      apTooltip:"AP = Acta Point, nháº­n Ä‘Æ°á»£c khi hoÃ n thÃ nh hÃ nh Ä‘á»™ng. Cáº¥p Ä‘á»™ Ä‘Æ°á»£c tÃ­nh tá»« tá»•ng AP theo Ä‘Æ°á»ng cong kiá»ƒu RPG â€” Ä‘áº¡t cÃ¡c má»‘c cáº¥p Ä‘á»™ Ä‘á»ƒ cÃ³ má»™t khoáº£nh kháº¯c Äƒn má»«ng nhá».",
      syncedAs:"ÄÃ£ Ä‘Äƒng nháº­p vá»›i {email}", signOut:"ÄÄƒng xuáº¥t", continueBtn:"Tiáº¿p tá»¥c", syncFillFields:"Vui lÃ²ng nháº­p cáº£ email vÃ  máº­t kháº©u.",
      syncActiveNote:"Dá»¯ liá»‡u cá»§a báº¡n giá» sáº½ tá»± Ä‘á»™ng Ä‘á»“ng bá»™ qua cÃ¡c thiáº¿t bá»‹ khi Ä‘Ã£ Ä‘Äƒng nháº­p.",
      syncConflictMsg:"TÃ i khoáº£n nÃ y Ä‘Ã£ cÃ³ dá»¯ liá»‡u lÆ°u tá»« thiáº¿t bá»‹ khÃ¡c. Báº¡n muá»‘n giá»¯ bÃªn nÃ o?",
      syncKeepDevice:"Giá»¯ thiáº¿t bá»‹ nÃ y", syncUseCloud:"DÃ¹ng dá»¯ liá»‡u Ä‘Ã¡m mÃ¢y", syncUnavailable:"Äá»“ng bá»™ hiá»‡n khÃ´ng kháº£ dá»¥ng â€” kiá»ƒm tra káº¿t ná»‘i máº¡ng.",
      todayLabel:"hoÃ n thÃ nh hÃ´m nay", shortcutsHeader:"PHÃM Táº®T", scFocus:"Focus vÃ o Ã´ nháº­p", scEsc:"ÄÃ³ng há»™p thoáº¡i", scUndo:"HoÃ n tÃ¡c", scRedo:"LÃ m láº¡i",
      scExport:"Xuáº¥t backup", scImport:"Nháº­p backup", scStats:"Má»Ÿ Thá»‘ng kÃª", scTheme:"Äá»•i giao diá»‡n", monthlyTitle:"Táº¦N SUáº¤T THEO THÃNG",
      exportJsonLabel:"Xuáº¥t JSON", exportPdfLabel:"Xuáº¥t PDF", navActaCard:"Acta Card",
      profileNameLabel:"TÃªn", profileNamePlaceholder:"TÃªn cá»§a báº¡n", profileBioLabel:"Tiá»ƒu sá»­", profileBioPlaceholder:"Giá»›i thiá»‡u vá» báº¡nâ€¦",
      profileCountryLabel:"Quá»‘c gia", profileCountryPlaceholder:"Quá»‘c gia cá»§a báº¡n", changeAvatarLabel:"Cháº¡m Ä‘á»ƒ Ä‘á»•i áº£nh",
      firstRunTitle:"LÆ°u giá»¯ hÃ nh trÃ¬nh cá»§a báº¡n", firstRunMsg:"ÄÄƒng nháº­p Ä‘á»ƒ giá»¯ an toÃ n hÃ nh Ä‘á»™ng, chuá»—i ngÃ y vÃ  tiáº¿n trÃ¬nh cá»§a báº¡n trÃªn má»i thiáº¿t bá»‹.",
      firstRunSignIn:"ÄÄƒng nháº­p", firstRunLater:"Äá»ƒ sau",
      actaCardDownload:"Táº£i Card", actaCardTasksDone:"Viá»‡c Ä‘Ã£ lÃ m", actaCardMaxStreak:"Chuá»—i tá»‘i Ä‘a", actaCardLinkProfile:"Link há»“ sÆ¡",
      actaCardThankYou:"Cáº£m Æ¡n báº¡n", actaCardNeedSignIn:"ÄÄƒng nháº­p Ä‘á»ƒ táº¡o Acta Card", actaCardVerified:"ÄÃ£ xÃ¡c thá»±c",
      publicProfileNotFound:"KhÃ´ng tÃ¬m tháº¥y há»“ sÆ¡", publicProfileTryActa:"Tá»± tráº£i nghiá»‡m Acta", publicProfileLoading:"Äang táº£i há»“ sÆ¡â€¦",
      settingsTitle:"CÃ i Ä‘áº·t", pdfUnavailable:"Xuáº¥t PDF cáº§n káº¿t ná»‘i máº¡ng Ä‘á»ƒ táº£i â€” thá»­ láº¡i khi cÃ³ máº¡ng." },

    es:{ tagline:"cosas hechas â€” no cosas planeadas", level:"NIVEL", ap:"PA", streak:"dÃ­as seguidos",
      stats:"EstadÃ­sticas", todo:"Tareas", hint:"Sin presiÃ³n, solo progreso. Â¿QuÃ© lograste hoy?",
      tabOverview:"Resumen", tabHistory:"Historial", tabDaily:"Diario", statsTitle:"ESTADÃSTICAS",
      overviewEmpty:"El repositorio estÃ¡ vacÃ­o. Escribe /add <tarea> para empezar.",
      overviewSummary:"{count} tarea(s) registradas Â· {ap} PA en total",
      colTask:"Tarea", colCount:"Veces", colTotalAp:"PA total", colDate:"Fecha", colTime:"Hora", colAp:"PA",
      searchPlaceholder:"Buscar por nombre de tareaâ€¦", clearFilters:"Limpiar filtros", noMatch:"NingÃºn resultado coincide.",
      dailyEntries:"ENTRADAS", dailyEmpty:"No se registraron acciones este dÃ­a.", freqTitle:"FRECUENCIA",
      todoAddPlaceholder:"AÃ±adir una tareaâ€¦", todoEmpty:"Nada por aquÃ­ todavÃ­a. AÃ±ade tu primera tarea arriba.",
      diffEasy:"FÃ¡cil", diffNormal:"Normal", diffHard:"DifÃ­cil",
      tabSync:"Sincronizar", tabAchievements:"Logros", tabLanguage:"Idioma",
      syncIntro:"Conecta una cuenta para sincronizar tus datos entre dispositivos.",
      syncSoon:"La sincronizaciÃ³n en la nube llegarÃ¡ en una futura actualizaciÃ³n. Por ahora, usa Exportar / Importar.",
      syncGoogle:"Continuar con Google", syncGithub:"Continuar con GitHub", syncApple:"Continuar con Apple", syncEmail:"Continuar con Email",
      achIntro:"Alcanza estos niveles para desbloquearlos.", achLocked:"Bloqueado",
      langIntro:"Elige tu idioma. Todo cambia â€” cada pantalla, cada mensaje.",
      soundLabel:"Sonido", vibLabel:"VibraciÃ³n", volLabel:"Volumen", close:"Cerrar",
      bootMsg:"SesiÃ³n iniciada â€” Acta v3.6.3", philMsg:"FilosofÃ­a: cosas hechas, no cosas planeadas. Sin horarios, solo reconocimiento.",
      helpMsg:"Escribe /help para ver los comandos, o simplemente escribe lo que hiciste.", helpHeader:"LISTA DE COMANDOS",
      unknownCmd:"Comando desconocido: \"{cmd}\". Escribe /help para ver la lista.",
      addUsage:"Uso: /add <tarea>", addInvalid:"Ese nombre de tarea no es vÃ¡lido.",
      addExisting:"+1 PA â€” \"{task}\" (vez #{count})", addNew:"Nueva tarea registrada: \"{task}\" (+1 PA)",
      delUsage:"Uso: /del <tarea>", delOk:"Se eliminÃ³ \"{task}\" del repositorio.", delNotFound:"No se encontrÃ³ \"{task}\" en el repositorio.",
      clearedMsg:"Pantalla despejada. Tus datos estÃ¡n intactos.", exportedMsg:"Archivo de backup descargado.",
      importedMsg:"Datos importados desde \"{file}\".", importFailed:"Error al importar: el archivo no es JSON vÃ¡lido.", importReadFail:"Error al importar: no se pudo leer el archivo.",
      undidMsg:"Se deshizo la Ãºltima acciÃ³n.", redidMsg:"Se rehizo la Ãºltima acciÃ³n deshecha.",
      todoDoneMsg:"Completado \"{task}\" (+{ap} PA) Â· Tareas", levelUp:"Â¡Nivel {level}!", nicedBtn:"Â¡Genial!", account:"Cuenta",
      cmdAdd:"Registra una acciÃ³n. Tarea existente: +PA y +1 al contador; una nueva se registra sola.",
      cmdDel:"Elimina una tarea del repositorio.", cmdList:"Abre EstadÃ­sticas.", cmdExport:"Descarga un backup de tus datos en JSON.",
      cmdImport:"Carga datos desde un archivo de backup JSON.", cmdUndo:"Deshace la Ãºltima acciÃ³n.", cmdRedo:"Rehace la Ãºltima acciÃ³n deshecha.",
      cmdTheme:"Alterna entre tema claro y oscuro.", cmdClear:"Limpia la pantalla. Tus datos se conservan.", cmdHelp:"Muestra esta lista de nuevo.",
      dataLabel:"Datos", eraseData:"Borrar todos los datos", eraseConfirmMsg:"Esto eliminarÃ¡ permanentemente todo tu AP, tareas, historial y lista de tareas. No se puede deshacer.",
      erasedMsg:"Todos los datos han sido borrados.", cancelBtn:"Cancelar", confirmBtn:"Borrar", restoreHint:"Usa Importar para restaurar desde un backup.",
      apTooltip:"PA = Acta Point, se gana completando acciones. El nivel se calcula a partir del total de PA con una curva estilo RPG â€” alcanza niveles hito para una pequeÃ±a celebraciÃ³n.",
      syncedAs:"SesiÃ³n iniciada como {email}", signOut:"Cerrar sesiÃ³n", continueBtn:"Continuar", syncFillFields:"Introduce el email y la contraseÃ±a.",
      syncActiveNote:"Tus datos ahora se sincronizan automÃ¡ticamente entre tus dispositivos mientras tengas la sesiÃ³n iniciada.",
      syncConflictMsg:"Esta cuenta ya tiene datos guardados de otro dispositivo. Â¿CuÃ¡l quieres conservar?",
      syncKeepDevice:"Conservar este dispositivo", syncUseCloud:"Usar datos de la nube", syncUnavailable:"La sincronizaciÃ³n no estÃ¡ disponible ahora â€” revisa tu conexiÃ³n.",
      todayLabel:"hechas hoy", shortcutsHeader:"ATAJOS DE TECLADO", scFocus:"Enfocar el campo de entrada", scEsc:"Cerrar diÃ¡logos", scUndo:"Deshacer", scRedo:"Rehacer",
      scExport:"Exportar backup", scImport:"Importar backup", scStats:"Abrir EstadÃ­sticas", scTheme:"Cambiar tema", monthlyTitle:"FRECUENCIA MENSUAL",
      exportJsonLabel:"Exportar JSON", exportPdfLabel:"Exportar PDF", navActaCard:"Acta Card",
      profileNameLabel:"Nombre", profileNamePlaceholder:"Tu nombre", profileBioLabel:"BiografÃ­a", profileBioPlaceholder:"CuÃ©ntanos sobre tiâ€¦",
      profileCountryLabel:"PaÃ­s", profileCountryPlaceholder:"Tu paÃ­s", changeAvatarLabel:"Toca para cambiar la foto",
      firstRunTitle:"Guarda tu recorrido", firstRunMsg:"Inicia sesiÃ³n para mantener seguras tus acciones, rachas y progreso en todos tus dispositivos.",
      firstRunSignIn:"Iniciar sesiÃ³n", firstRunLater:"QuizÃ¡s luego",
      actaCardDownload:"Descargar Card", actaCardTasksDone:"Tareas hechas", actaCardMaxStreak:"Racha mÃ¡xima", actaCardLinkProfile:"Enlace del perfil",
      actaCardThankYou:"Gracias", actaCardNeedSignIn:"Inicia sesiÃ³n para generar tu Acta Card", actaCardVerified:"Verificado",
      publicProfileNotFound:"Perfil no encontrado", publicProfileTryActa:"Prueba Acta tÃº mismo", publicProfileLoading:"Cargando perfilâ€¦",
      settingsTitle:"Ajustes", pdfUnavailable:"La exportaciÃ³n a PDF necesita conexiÃ³n a internet â€” intÃ©ntalo de nuevo con conexiÃ³n." },

    fr:{ tagline:"des choses faites â€” pas des choses prÃ©vues", level:"NIVEAU", ap:"PA", streak:"jours de suite",
      stats:"Statistiques", todo:"Ã€ faire", hint:"Sans pression, juste du progrÃ¨s. Qu'avez-vous accompli aujourd'hui ?",
      tabOverview:"AperÃ§u", tabHistory:"Historique", tabDaily:"Journalier", statsTitle:"STATISTIQUES",
      overviewEmpty:"Le dÃ©pÃ´t est vide. Tapez /add <tÃ¢che> pour commencer.",
      overviewSummary:"{count} tÃ¢che(s) suivie(s) Â· {ap} PA au total",
      colTask:"TÃ¢che", colCount:"Occurrences", colTotalAp:"PA total", colDate:"Date", colTime:"Heure", colAp:"PA",
      searchPlaceholder:"Rechercher une tÃ¢cheâ€¦", clearFilters:"RÃ©initialiser", noMatch:"Aucun rÃ©sultat.",
      dailyEntries:"ENTRÃ‰ES", dailyEmpty:"Aucune action enregistrÃ©e ce jour-lÃ .", freqTitle:"FRÃ‰QUENCE",
      todoAddPlaceholder:"Ajouter une tÃ¢cheâ€¦", todoEmpty:"Rien ici pour l'instant. Ajoutez votre premiÃ¨re tÃ¢che ci-dessus.",
      diffEasy:"Facile", diffNormal:"Normal", diffHard:"Difficile",
      tabSync:"Synchro", tabAchievements:"SuccÃ¨s", tabLanguage:"Langue",
      syncIntro:"Connectez un compte pour synchroniser vos donnÃ©es entre appareils.",
      syncSoon:"La synchronisation cloud arrive dans une prochaine mise Ã  jour. Utilisez Exporter / Importer pour l'instant.",
      syncGoogle:"Continuer avec Google", syncGithub:"Continuer avec GitHub", syncApple:"Continuer avec Apple", syncEmail:"Continuer avec Email",
      achIntro:"Atteignez ces niveaux pour les dÃ©bloquer.", achLocked:"VerrouillÃ©",
      langIntro:"Choisissez votre langue. Tout change â€” chaque Ã©cran, chaque message.",
      soundLabel:"Son", vibLabel:"Vibration", volLabel:"Volume", close:"Fermer",
      bootMsg:"Session dÃ©marrÃ©e â€” Acta v3.6.3", philMsg:"Philosophie : des choses faites, pas des choses prÃ©vues. Pas d'horaire, juste de la reconnaissance.",
      helpMsg:"Tapez /help pour la liste des commandes, ou tapez simplement ce que vous avez fait.", helpHeader:"LISTE DES COMMANDES",
      unknownCmd:"Commande inconnue : \"{cmd}\". Tapez /help pour la liste.",
      addUsage:"Usage : /add <tÃ¢che>", addInvalid:"Ce nom de tÃ¢che n'est pas valide.",
      addExisting:"+1 PA â€” \"{task}\" (occurrence nÂ°{count})", addNew:"Nouvelle tÃ¢che enregistrÃ©e : \"{task}\" (+1 PA)",
      delUsage:"Usage : /del <tÃ¢che>", delOk:"\"{task}\" a Ã©tÃ© retirÃ©e du dÃ©pÃ´t.", delNotFound:"\"{task}\" est introuvable dans le dÃ©pÃ´t.",
      clearedMsg:"Ã‰cran nettoyÃ©. Vos donnÃ©es sont intactes.", exportedMsg:"Fichier de sauvegarde tÃ©lÃ©chargÃ©.",
      importedMsg:"DonnÃ©es importÃ©es depuis \"{file}\".", importFailed:"Ã‰chec de l'import : fichier JSON invalide.", importReadFail:"Ã‰chec de l'import : lecture du fichier impossible.",
      undidMsg:"DerniÃ¨re action annulÃ©e.", redidMsg:"DerniÃ¨re annulation rÃ©tablie.",
      todoDoneMsg:"TerminÃ© \"{task}\" (+{ap} PA) Â· Ã€ faire", levelUp:"Niveau {level} !", nicedBtn:"Super !", account:"Compte",
      cmdAdd:"Enregistre une action. TÃ¢che existante : +PA et +1 occurrence ; une nouvelle s'enregistre automatiquement.",
      cmdDel:"Retire une tÃ¢che du dÃ©pÃ´t.", cmdList:"Ouvre les Statistiques.", cmdExport:"TÃ©lÃ©charge une sauvegarde JSON de vos donnÃ©es.",
      cmdImport:"Charge des donnÃ©es depuis un fichier de sauvegarde JSON.", cmdUndo:"Annule la derniÃ¨re action.", cmdRedo:"RÃ©tablit la derniÃ¨re annulation.",
      cmdTheme:"Bascule entre thÃ¨me clair et sombre.", cmdClear:"Nettoie l'Ã©cran. Vos donnÃ©es sont conservÃ©es.", cmdHelp:"RÃ©affiche cette liste.",
      dataLabel:"DonnÃ©es", eraseData:"Effacer toutes les donnÃ©es", eraseConfirmMsg:"Cela supprimera dÃ©finitivement tous vos PA, tÃ¢ches, historique et to-do. Action irrÃ©versible.",
      erasedMsg:"Toutes les donnÃ©es ont Ã©tÃ© effacÃ©es.", cancelBtn:"Annuler", confirmBtn:"Effacer", restoreHint:"Utilisez Importer pour restaurer depuis une sauvegarde.",
      apTooltip:"PA = Acta Point, gagnÃ© en accomplissant des actions. Le niveau est calculÃ© Ã  partir du total de PA selon une courbe faÃ§on RPG â€” atteignez des niveaux jalons pour une petite cÃ©lÃ©bration.",
      syncedAs:"ConnectÃ© en tant que {email}", signOut:"Se dÃ©connecter", continueBtn:"Continuer", syncFillFields:"Renseignez l'email et le mot de passe.",
      syncActiveNote:"Vos donnÃ©es se synchronisent dÃ©sormais automatiquement entre vos appareils tant que vous Ãªtes connectÃ©.",
      syncConflictMsg:"Ce compte a dÃ©jÃ  des donnÃ©es enregistrÃ©es depuis un autre appareil. Lesquelles voulez-vous garder ?",
      syncKeepDevice:"Garder cet appareil", syncUseCloud:"Utiliser les donnÃ©es du cloud", syncUnavailable:"La synchronisation n'est pas disponible pour le moment â€” vÃ©rifiez votre connexion.",
      todayLabel:"faites aujourd'hui", shortcutsHeader:"RACCOURCIS CLAVIER", scFocus:"Focaliser la saisie", scEsc:"Fermer les dialogues", scUndo:"Annuler", scRedo:"RÃ©tablir",
      scExport:"Exporter la sauvegarde", scImport:"Importer une sauvegarde", scStats:"Ouvrir les Statistiques", scTheme:"Changer de thÃ¨me", monthlyTitle:"FRÃ‰QUENCE MENSUELLE",
      exportJsonLabel:"Exporter JSON", exportPdfLabel:"Exporter PDF", navActaCard:"Acta Card",
      profileNameLabel:"Nom", profileNamePlaceholder:"Votre nom", profileBioLabel:"Bio", profileBioPlaceholder:"Parlez-nous de vousâ€¦",
      profileCountryLabel:"Pays", profileCountryPlaceholder:"Votre pays", changeAvatarLabel:"Touchez pour changer la photo",
      firstRunTitle:"Sauvegardez votre parcours", firstRunMsg:"Connectez-vous pour garder vos actions, sÃ©ries et progrÃ¨s en sÃ©curitÃ© sur tous vos appareils.",
      firstRunSignIn:"Se connecter", firstRunLater:"Plus tard",
      actaCardDownload:"TÃ©lÃ©charger la Card", actaCardTasksDone:"TÃ¢ches faites", actaCardMaxStreak:"SÃ©rie max", actaCardLinkProfile:"Lien du profil",
      actaCardThankYou:"Merci", actaCardNeedSignIn:"Connectez-vous pour gÃ©nÃ©rer votre Acta Card", actaCardVerified:"VÃ©rifiÃ©",
      publicProfileNotFound:"Profil introuvable", publicProfileTryActa:"Essayez Acta vous-mÃªme", publicProfileLoading:"Chargement du profilâ€¦",
      settingsTitle:"RÃ©glages", pdfUnavailable:"L'export PDF nÃ©cessite une connexion internet â€” rÃ©essayez une fois en ligne." },

    de:{ tagline:"Erledigtes â€” kein Geplantes", level:"STUFE", ap:"AP", streak:"Tage in Folge",
      stats:"Statistik", todo:"Aufgaben", hint:"Kein Druck, nur Fortschritt. Was hast du heute geschafft?",
      tabOverview:"Ãœbersicht", tabHistory:"Verlauf", tabDaily:"TÃ¤glich", statsTitle:"STATISTIK",
      overviewEmpty:"Das Verzeichnis ist leer. Tippe /add <Aufgabe>, um zu starten.",
      overviewSummary:"{count} erfasste Aufgabe(n) Â· {ap} AP insgesamt",
      colTask:"Aufgabe", colCount:"Anzahl", colTotalAp:"AP gesamt", colDate:"Datum", colTime:"Zeit", colAp:"AP",
      searchPlaceholder:"Nach Aufgabenname suchenâ€¦", clearFilters:"Filter zurÃ¼cksetzen", noMatch:"Keine Treffer.",
      dailyEntries:"EINTRÃ„GE", dailyEmpty:"An diesem Tag wurden keine Aktionen erfasst.", freqTitle:"HÃ„UFIGKEIT",
      todoAddPlaceholder:"Aufgabe hinzufÃ¼genâ€¦", todoEmpty:"Noch nichts hier. FÃ¼ge oben deine erste Aufgabe hinzu.",
      diffEasy:"Leicht", diffNormal:"Normal", diffHard:"Schwer",
      tabSync:"Sync", tabAchievements:"Erfolge", tabLanguage:"Sprache",
      syncIntro:"Verbinde ein Konto, um Daten gerÃ¤teÃ¼bergreifend zu synchronisieren.",
      syncSoon:"Cloud-Sync kommt in einem zukÃ¼nftigen Update. Nutze bis dahin Export / Import.",
      syncGoogle:"Weiter mit Google", syncGithub:"Weiter mit GitHub", syncApple:"Weiter mit Apple", syncEmail:"Weiter mit E-Mail",
      achIntro:"Erreiche diese Stufen, um sie freizuschalten.", achLocked:"Gesperrt",
      langIntro:"WÃ¤hle deine Sprache. Alles wechselt â€” jeder Bildschirm, jede Nachricht.",
      soundLabel:"Ton", vibLabel:"Vibration", volLabel:"LautstÃ¤rke", close:"SchlieÃŸen",
      bootMsg:"Sitzung gestartet â€” Acta v3.6.3", philMsg:"Philosophie: Erledigtes zÃ¤hlt, nicht Geplantes. Kein Zeitplan, nur Anerkennung.",
      helpMsg:"Tippe /help fÃ¼r die Befehlsliste, oder schreib einfach, was du getan hast.", helpHeader:"BEFEHLSLISTE",
      unknownCmd:"Unbekannter Befehl: \"{cmd}\". Tippe /help fÃ¼r die Liste.",
      addUsage:"Verwendung: /add <Aufgabe>", addInvalid:"Dieser Aufgabenname ist ungÃ¼ltig.",
      addExisting:"+1 AP â€” \"{task}\" (#{count})", addNew:"Neue Aufgabe registriert: \"{task}\" (+1 AP)",
      delUsage:"Verwendung: /del <Aufgabe>", delOk:"\"{task}\" wurde entfernt.", delNotFound:"\"{task}\" wurde nicht gefunden.",
      clearedMsg:"Bildschirm geleert. Deine Daten bleiben erhalten.", exportedMsg:"Backup-Datei heruntergeladen.",
      importedMsg:"Daten aus \"{file}\" importiert.", importFailed:"Import fehlgeschlagen: ungÃ¼ltige JSON-Datei.", importReadFail:"Import fehlgeschlagen: Datei konnte nicht gelesen werden.",
      undidMsg:"Letzte Aktion rÃ¼ckgÃ¤ngig gemacht.", redidMsg:"Letzte rÃ¼ckgÃ¤ngig gemachte Aktion wiederholt.",
      todoDoneMsg:"\"{task}\" erledigt (+{ap} AP) Â· Aufgaben", levelUp:"Stufe {level}!", nicedBtn:"Super!", account:"Konto",
      cmdAdd:"Erfasst eine Aktion. Bestehende Aufgabe: +AP und ZÃ¤hler +1; neue registriert sich automatisch.",
      cmdDel:"Entfernt eine Aufgabe.", cmdList:"Ã–ffnet die Statistik.", cmdExport:"LÃ¤dt ein JSON-Backup deiner Daten herunter.",
      cmdImport:"LÃ¤dt Daten aus einer JSON-Backup-Datei.", cmdUndo:"Macht die letzte Aktion rÃ¼ckgÃ¤ngig.", cmdRedo:"Stellt die letzte rÃ¼ckgÃ¤ngig gemachte Aktion wieder her.",
      cmdTheme:"Wechselt zwischen hellem und dunklem Design.", cmdClear:"Leert den Bildschirm. Deine Daten bleiben erhalten.", cmdHelp:"Zeigt diese Liste erneut.",
      dataLabel:"Daten", eraseData:"Alle Daten lÃ¶schen", eraseConfirmMsg:"Dadurch werden alle deine AP, Aufgaben, dein Verlauf und deine To-Dos dauerhaft gelÃ¶scht. Das kann nicht rÃ¼ckgÃ¤ngig gemacht werden.",
      erasedMsg:"Alle Daten wurden gelÃ¶scht.", cancelBtn:"Abbrechen", confirmBtn:"LÃ¶schen", restoreHint:"Nutze Import, um aus einem Backup wiederherzustellen.",
      apTooltip:"AP = Acta Point, erhalten durch abgeschlossene Aktionen. Die Stufe wird aus deinem gesamten AP nach einer RPG-artigen Kurve berechnet â€” erreiche Meilenstein-Stufen fÃ¼r eine kleine Feier.",
      syncedAs:"Angemeldet als {email}", signOut:"Abmelden", continueBtn:"Weiter", syncFillFields:"Bitte E-Mail und Passwort eingeben.",
      syncActiveNote:"Deine Daten werden jetzt automatisch zwischen deinen GerÃ¤ten synchronisiert, solange du angemeldet bist.",
      syncConflictMsg:"Dieses Konto hat bereits gespeicherte Daten von einem anderen GerÃ¤t. Welche mÃ¶chtest du behalten?",
      syncKeepDevice:"Dieses GerÃ¤t behalten", syncUseCloud:"Cloud-Daten verwenden", syncUnavailable:"Synchronisierung ist gerade nicht verfÃ¼gbar â€” Ã¼berprÃ¼fe deine Verbindung.",
      todayLabel:"heute erledigt", shortcutsHeader:"TASTENKÃœRZEL", scFocus:"Eingabe fokussieren", scEsc:"Dialoge schlieÃŸen", scUndo:"RÃ¼ckgÃ¤ngig", scRedo:"Wiederholen",
      scExport:"Backup exportieren", scImport:"Backup importieren", scStats:"Statistik Ã¶ffnen", scTheme:"Design wechseln", monthlyTitle:"MONATLICHE HÃ„UFIGKEIT",
      exportJsonLabel:"JSON exportieren", exportPdfLabel:"PDF exportieren", navActaCard:"Acta Card",
      profileNameLabel:"Name", profileNamePlaceholder:"Dein Name", profileBioLabel:"Bio", profileBioPlaceholder:"ErzÃ¤hl uns von dirâ€¦",
      profileCountryLabel:"Land", profileCountryPlaceholder:"Dein Land", changeAvatarLabel:"Tippen, um das Foto zu Ã¤ndern",
      firstRunTitle:"Sichere deine Reise", firstRunMsg:"Melde dich an, um deine Aktionen, Serien und Fortschritte gerÃ¤teÃ¼bergreifend sicher zu halten.",
      firstRunSignIn:"Anmelden", firstRunLater:"Vielleicht spÃ¤ter",
      actaCardDownload:"Card herunterladen", actaCardTasksDone:"Erledigte Aufgaben", actaCardMaxStreak:"LÃ¤ngste Serie", actaCardLinkProfile:"Profil-Link",
      actaCardThankYou:"Danke", actaCardNeedSignIn:"Melde dich an, um deine Acta Card zu erstellen", actaCardVerified:"Verifiziert",
      publicProfileNotFound:"Profil nicht gefunden", publicProfileTryActa:"Probier Acta selbst aus", publicProfileLoading:"Profil wird geladenâ€¦",
      settingsTitle:"Einstellungen", pdfUnavailable:"Der PDF-Export benÃ¶tigt eine Internetverbindung â€” versuche es erneut, sobald du online bist." },

    pt:{ tagline:"coisas feitas â€” nÃ£o coisas planejadas", level:"NÃVEL", ap:"PA", streak:"dias seguidos",
      stats:"EstatÃ­sticas", todo:"Tarefas", hint:"Sem pressÃ£o, sÃ³ progresso. O que vocÃª concluiu hoje?",
      tabOverview:"VisÃ£o geral", tabHistory:"HistÃ³rico", tabDaily:"DiÃ¡rio", statsTitle:"ESTATÃSTICAS",
      overviewEmpty:"O repositÃ³rio estÃ¡ vazio. Digite /add <tarefa> para comeÃ§ar.",
      overviewSummary:"{count} tarefa(s) monitorada(s) Â· {ap} PA no total",
      colTask:"Tarefa", colCount:"Vezes", colTotalAp:"PA total", colDate:"Data", colTime:"Hora", colAp:"PA",
      searchPlaceholder:"Buscar por nome da tarefaâ€¦", clearFilters:"Limpar filtros", noMatch:"Nenhum resultado encontrado.",
      dailyEntries:"REGISTROS", dailyEmpty:"Nenhuma aÃ§Ã£o registrada neste dia.", freqTitle:"FREQUÃŠNCIA",
      todoAddPlaceholder:"Adicionar uma tarefaâ€¦", todoEmpty:"Nada por aqui ainda. Adicione sua primeira tarefa acima.",
      diffEasy:"FÃ¡cil", diffNormal:"Normal", diffHard:"DifÃ­cil",
      tabSync:"Sincronizar", tabAchievements:"Conquistas", tabLanguage:"Idioma",
      syncIntro:"Conecte uma conta para sincronizar seus dados entre dispositivos.",
      syncSoon:"A sincronizaÃ§Ã£o em nuvem chega em uma atualizaÃ§Ã£o futura. Por enquanto, use Exportar / Importar.",
      syncGoogle:"Continuar com Google", syncGithub:"Continuar com GitHub", syncApple:"Continuar com Apple", syncEmail:"Continuar com Email",
      achIntro:"Alcance esses nÃ­veis para desbloqueÃ¡-los.", achLocked:"Bloqueado",
      langIntro:"Escolha seu idioma. Tudo muda â€” cada tela, cada mensagem.",
      soundLabel:"Som", vibLabel:"VibraÃ§Ã£o", volLabel:"Volume", close:"Fechar",
      bootMsg:"SessÃ£o iniciada â€” Acta v3.6.3", philMsg:"Filosofia: coisas feitas, nÃ£o coisas planejadas. Sem agenda, sÃ³ reconhecimento.",
      helpMsg:"Digite /help para a lista de comandos, ou apenas digite o que vocÃª fez.", helpHeader:"LISTA DE COMANDOS",
      unknownCmd:"Comando desconhecido: \"{cmd}\". Digite /help para a lista.",
      addUsage:"Uso: /add <tarefa>", addInvalid:"Esse nome de tarefa nÃ£o Ã© vÃ¡lido.",
      addExisting:"+1 PA â€” \"{task}\" (vez #{count})", addNew:"Nova tarefa registrada: \"{task}\" (+1 PA)",
      delUsage:"Uso: /del <tarefa>", delOk:"\"{task}\" foi removida do repositÃ³rio.", delNotFound:"\"{task}\" nÃ£o foi encontrada no repositÃ³rio.",
      clearedMsg:"Tela limpa. Seus dados estÃ£o intactos.", exportedMsg:"Arquivo de backup baixado.",
      importedMsg:"Dados importados de \"{file}\".", importFailed:"Falha na importaÃ§Ã£o: arquivo JSON invÃ¡lido.", importReadFail:"Falha na importaÃ§Ã£o: nÃ£o foi possÃ­vel ler o arquivo.",
      undidMsg:"Ãšltima aÃ§Ã£o desfeita.", redidMsg:"Ãšltima aÃ§Ã£o desfeita foi refeita.",
      todoDoneMsg:"ConcluÃ­do \"{task}\" (+{ap} PA) Â· Tarefas", levelUp:"NÃ­vel {level}!", nicedBtn:"Ã“timo!", account:"Conta",
      cmdAdd:"Registra uma aÃ§Ã£o. Tarefa existente: +PA e +1 na contagem; uma nova se registra sozinha.",
      cmdDel:"Remove uma tarefa do repositÃ³rio.", cmdList:"Abre as EstatÃ­sticas.", cmdExport:"Baixa um backup dos seus dados em JSON.",
      cmdImport:"Carrega dados de um arquivo de backup JSON.", cmdUndo:"Desfaz a Ãºltima aÃ§Ã£o.", cmdRedo:"Refaz a Ãºltima aÃ§Ã£o desfeita.",
      cmdTheme:"Alterna entre tema claro e escuro.", cmdClear:"Limpa a tela. Seus dados sÃ£o mantidos.", cmdHelp:"Mostra esta lista novamente.",
      dataLabel:"Dados", eraseData:"Apagar todos os dados", eraseConfirmMsg:"Isso vai apagar permanentemente todos os seus PA, tarefas, histÃ³rico e lista de tarefas. NÃ£o pode ser desfeito.",
      erasedMsg:"Todos os dados foram apagados.", cancelBtn:"Cancelar", confirmBtn:"Apagar", restoreHint:"Use Importar para restaurar a partir de um backup.",
      apTooltip:"PA = Acta Point, obtido ao concluir aÃ§Ãµes. O nÃ­vel Ã© calculado a partir do total de PA numa curva estilo RPG â€” alcance nÃ­veis marco para uma pequena celebraÃ§Ã£o.",
      syncedAs:"SessÃ£o iniciada como {email}", signOut:"Sair", continueBtn:"Continuar", syncFillFields:"Preencha o email e a senha.",
      syncActiveNote:"Seus dados agora sincronizam automaticamente entre seus dispositivos enquanto vocÃª estiver conectado.",
      syncConflictMsg:"Esta conta jÃ¡ tem dados salvos de outro dispositivo. Qual vocÃª quer manter?",
      syncKeepDevice:"Manter este dispositivo", syncUseCloud:"Usar dados da nuvem", syncUnavailable:"A sincronizaÃ§Ã£o nÃ£o estÃ¡ disponÃ­vel agora â€” verifique sua conexÃ£o.",
      todayLabel:"feitas hoje", shortcutsHeader:"ATALHOS DE TECLADO", scFocus:"Focar no campo de entrada", scEsc:"Fechar diÃ¡logos", scUndo:"Desfazer", scRedo:"Refazer",
      scExport:"Exportar backup", scImport:"Importar backup", scStats:"Abrir EstatÃ­sticas", scTheme:"Alternar tema", monthlyTitle:"FREQUÃŠNCIA MENSAL",
      exportJsonLabel:"Exportar JSON", exportPdfLabel:"Exportar PDF", navActaCard:"Acta Card",
      profileNameLabel:"Nome", profileNamePlaceholder:"Seu nome", profileBioLabel:"Bio", profileBioPlaceholder:"Conte-nos sobre vocÃªâ€¦",
      profileCountryLabel:"PaÃ­s", profileCountryPlaceholder:"Seu paÃ­s", changeAvatarLabel:"Toque para trocar a foto",
      firstRunTitle:"Salve sua jornada", firstRunMsg:"Entre para manter suas aÃ§Ãµes, sequÃªncias e progresso seguros em todos os dispositivos.",
      firstRunSignIn:"Entrar", firstRunLater:"Talvez depois",
      actaCardDownload:"Baixar Card", actaCardTasksDone:"Tarefas feitas", actaCardMaxStreak:"SequÃªncia mÃ¡xima", actaCardLinkProfile:"Link do perfil",
      actaCardThankYou:"Obrigado", actaCardNeedSignIn:"Entre para gerar seu Acta Card", actaCardVerified:"Verificado",
      publicProfileNotFound:"Perfil nÃ£o encontrado", publicProfileTryActa:"Experimente o Acta vocÃª mesmo", publicProfileLoading:"Carregando perfilâ€¦",
      settingsTitle:"ConfiguraÃ§Ãµes", pdfUnavailable:"A exportaÃ§Ã£o em PDF precisa de conexÃ£o com a internet â€” tente novamente quando estiver online." },

    ja:{ tagline:"ã‚„ã£ãŸã“ã¨ â€• äºˆå®šã§ã¯ãªã", level:"ãƒ¬ãƒ™ãƒ«", ap:"AP", streak:"é€£ç¶šæ—¥æ•°",
      stats:"çµ±è¨ˆ", todo:"To-Do", hint:"ãƒ—ãƒ¬ãƒƒã‚·ãƒ£ãƒ¼ã¯ã„ã‚‰ãªã„ã€å‰é€²ã‚ã‚‹ã®ã¿ã€‚ä»Šæ—¥ä½•ã‚’é”æˆã—ã¾ã—ãŸã‹ï¼Ÿ",
      tabOverview:"æ¦‚è¦", tabHistory:"å±¥æ­´", tabDaily:"æ—¥åˆ¥", statsTitle:"çµ±è¨ˆ",
      overviewEmpty:"ãƒªãƒã‚¸ãƒˆãƒªã¯ç©ºã§ã™ã€‚/add <ã‚¿ã‚¹ã‚¯> ã¨å…¥åŠ›ã—ã¦è¨˜éŒ²ã‚’å§‹ã‚ã¾ã—ã‚‡ã†ã€‚",
      overviewSummary:"è¨˜éŒ²ä¸­ã®ã‚¿ã‚¹ã‚¯ {count} ä»¶ Â· åˆè¨ˆ {ap} AP",
      colTask:"ã‚¿ã‚¹ã‚¯", colCount:"å›žæ•°", colTotalAp:"åˆè¨ˆAP", colDate:"æ—¥ä»˜", colTime:"æ™‚åˆ»", colAp:"AP",
      searchPlaceholder:"ã‚¿ã‚¹ã‚¯åã§æ¤œç´¢â€¦", clearFilters:"ãƒ•ã‚£ãƒ«ã‚¿ãƒ¼ã‚’è§£é™¤", noMatch:"è©²å½“ã™ã‚‹è¨˜éŒ²ãŒã‚ã‚Šã¾ã›ã‚“ã€‚",
      dailyEntries:"è¨˜éŒ²ä¸€è¦§", dailyEmpty:"ã“ã®æ—¥ã®è¨˜éŒ²ã¯ã‚ã‚Šã¾ã›ã‚“ã€‚", freqTitle:"é »åº¦",
      todoAddPlaceholder:"ã‚¿ã‚¹ã‚¯ã‚’è¿½åŠ â€¦", todoEmpty:"ã¾ã ä½•ã‚‚ã‚ã‚Šã¾ã›ã‚“ã€‚ä¸Šã§æœ€åˆã®ã‚¿ã‚¹ã‚¯ã‚’è¿½åŠ ã—ã¾ã—ã‚‡ã†ã€‚",
      diffEasy:"ç°¡å˜", diffNormal:"æ™®é€š", diffHard:"é›£ã—ã„",
      tabSync:"åŒæœŸ", tabAchievements:"å®Ÿç¸¾", tabLanguage:"è¨€èªž",
      syncIntro:"ã‚¢ã‚«ã‚¦ãƒ³ãƒˆã‚’æŽ¥ç¶šã—ã¦ãƒ‡ãƒã‚¤ã‚¹é–“ã§ãƒ‡ãƒ¼ã‚¿ã‚’åŒæœŸã—ã¾ã™ã€‚",
      syncSoon:"ã‚¯ãƒ©ã‚¦ãƒ‰åŒæœŸã¯ä»Šå¾Œã®ã‚¢ãƒƒãƒ—ãƒ‡ãƒ¼ãƒˆã§æä¾›äºˆå®šã§ã™ã€‚ãã‚Œã¾ã§ã¯ Export / Import ã‚’ã”åˆ©ç”¨ãã ã•ã„ã€‚",
      syncGoogle:"Googleã§ç¶šã‘ã‚‹", syncGithub:"GitHubã§ç¶šã‘ã‚‹", syncApple:"Appleã§ç¶šã‘ã‚‹", syncEmail:"ãƒ¡ãƒ¼ãƒ«ã§ç¶šã‘ã‚‹",
      achIntro:"ã“ã‚Œã‚‰ã®ãƒ¬ãƒ™ãƒ«ã«åˆ°é”ã™ã‚‹ã¨è§£æ”¾ã•ã‚Œã¾ã™ã€‚", achLocked:"ãƒ­ãƒƒã‚¯ä¸­",
      langIntro:"è¨€èªžã‚’é¸æŠžã—ã¦ãã ã•ã„ã€‚ã™ã¹ã¦ã®ç”»é¢ãƒ»ãƒ¡ãƒƒã‚»ãƒ¼ã‚¸ãŒåˆ‡ã‚Šæ›¿ã‚ã‚Šã¾ã™ã€‚",
      soundLabel:"ã‚µã‚¦ãƒ³ãƒ‰", vibLabel:"ãƒã‚¤ãƒ–ãƒ¬ãƒ¼ã‚·ãƒ§ãƒ³", volLabel:"éŸ³é‡", close:"é–‰ã˜ã‚‹",
      bootMsg:"ã‚»ãƒƒã‚·ãƒ§ãƒ³é–‹å§‹ â€” Acta v3.6.3", philMsg:"ç†å¿µï¼šã‚„ã£ãŸã“ã¨ãŒã™ã¹ã¦ã€äºˆå®šã¯é–¢ä¿‚ãªã„ã€‚ã‚¹ã‚±ã‚¸ãƒ¥ãƒ¼ãƒ«ã§ã¯ãªãã€èªè­˜ã‚’ã€‚",
      helpMsg:"/help ã§ã‚³ãƒžãƒ³ãƒ‰ä¸€è¦§ã‚’è¡¨ç¤ºã€ã¾ãŸã¯å®Ÿè¡Œã—ãŸã“ã¨ã‚’ãã®ã¾ã¾å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚", helpHeader:"ã‚³ãƒžãƒ³ãƒ‰ä¸€è¦§",
      unknownCmd:"ä¸æ˜Žãªã‚³ãƒžãƒ³ãƒ‰: \"{cmd}\"ã€‚/help ã§ä¸€è¦§ã‚’ç¢ºèªã—ã¦ãã ã•ã„ã€‚",
      addUsage:"ä½¿ã„æ–¹: /add <ã‚¿ã‚¹ã‚¯>", addInvalid:"ãã®ã‚¿ã‚¹ã‚¯åã¯ä½¿ç”¨ã§ãã¾ã›ã‚“ã€‚",
      addExisting:"+1 AP â€” ã€Œ{task}ã€ï¼ˆ{count}å›žç›®ï¼‰", addNew:"æ–°ã—ã„ã‚¿ã‚¹ã‚¯ã‚’ç™»éŒ²ã—ã¾ã—ãŸ: ã€Œ{task}ã€(+1 AP)",
      delUsage:"ä½¿ã„æ–¹: /del <ã‚¿ã‚¹ã‚¯>", delOk:"ã€Œ{task}ã€ã‚’ãƒªãƒã‚¸ãƒˆãƒªã‹ã‚‰å‰Šé™¤ã—ã¾ã—ãŸã€‚", delNotFound:"ã€Œ{task}ã€ãŒè¦‹ã¤ã‹ã‚Šã¾ã›ã‚“ã€‚",
      clearedMsg:"ç”»é¢ã‚’ã‚¯ãƒªã‚¢ã—ã¾ã—ãŸã€‚ãƒ‡ãƒ¼ã‚¿ã¯ãã®ã¾ã¾æ®‹ã£ã¦ã„ã¾ã™ã€‚", exportedMsg:"ãƒãƒƒã‚¯ã‚¢ãƒƒãƒ—ãƒ•ã‚¡ã‚¤ãƒ«ã‚’ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰ã—ã¾ã—ãŸã€‚",
      importedMsg:"ã€Œ{file}ã€ã‹ã‚‰ãƒ‡ãƒ¼ã‚¿ã‚’ã‚¤ãƒ³ãƒãƒ¼ãƒˆã—ã¾ã—ãŸã€‚", importFailed:"ã‚¤ãƒ³ãƒãƒ¼ãƒˆå¤±æ•—ï¼šç„¡åŠ¹ãªJSONãƒ•ã‚¡ã‚¤ãƒ«ã§ã™ã€‚", importReadFail:"ã‚¤ãƒ³ãƒãƒ¼ãƒˆå¤±æ•—ï¼šãƒ•ã‚¡ã‚¤ãƒ«ã‚’èª­ã¿è¾¼ã‚ã¾ã›ã‚“ã§ã—ãŸã€‚",
      undidMsg:"ç›´å‰ã®æ“ä½œã‚’å–ã‚Šæ¶ˆã—ã¾ã—ãŸã€‚", redidMsg:"å–ã‚Šæ¶ˆã—ãŸæ“ä½œã‚’ã‚„ã‚Šç›´ã—ã¾ã—ãŸã€‚",
      todoDoneMsg:"ã€Œ{task}ã€ã‚’å®Œäº†ã—ã¾ã—ãŸ (+{ap} AP) Â· To-Do", levelUp:"ãƒ¬ãƒ™ãƒ« {level}ï¼", nicedBtn:"ã„ã„ã­ï¼", account:"ã‚¢ã‚«ã‚¦ãƒ³ãƒˆ",
      cmdAdd:"ã‚¢ã‚¯ã‚·ãƒ§ãƒ³ã‚’è¨˜éŒ²ã—ã¾ã™ã€‚æ—¢å­˜ã‚¿ã‚¹ã‚¯ã¯APåŠ ç®—ï¼†å›žæ•°+1ã€æ–°è¦ã‚¿ã‚¹ã‚¯ã¯è‡ªå‹•ç™»éŒ²ã•ã‚Œã¾ã™ã€‚",
      cmdDel:"ãƒªãƒã‚¸ãƒˆãƒªã‹ã‚‰ã‚¿ã‚¹ã‚¯ã‚’å‰Šé™¤ã—ã¾ã™ã€‚", cmdList:"çµ±è¨ˆã‚’é–‹ãã¾ã™ã€‚", cmdExport:"ãƒ‡ãƒ¼ã‚¿ã®JSONãƒãƒƒã‚¯ã‚¢ãƒƒãƒ—ã‚’ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰ã—ã¾ã™ã€‚",
      cmdImport:"JSONãƒãƒƒã‚¯ã‚¢ãƒƒãƒ—ãƒ•ã‚¡ã‚¤ãƒ«ã‹ã‚‰ãƒ‡ãƒ¼ã‚¿ã‚’èª­ã¿è¾¼ã¿ã¾ã™ã€‚", cmdUndo:"ç›´å‰ã®æ“ä½œã‚’å–ã‚Šæ¶ˆã—ã¾ã™ã€‚", cmdRedo:"å–ã‚Šæ¶ˆã—ãŸæ“ä½œã‚’ã‚„ã‚Šç›´ã—ã¾ã™ã€‚",
      cmdTheme:"ãƒ©ã‚¤ãƒˆ/ãƒ€ãƒ¼ã‚¯ãƒ†ãƒ¼ãƒžã‚’åˆ‡ã‚Šæ›¿ãˆã¾ã™ã€‚", cmdClear:"ç”»é¢ã‚’ã‚¯ãƒªã‚¢ã—ã¾ã™ã€‚ãƒ‡ãƒ¼ã‚¿ã¯ä¿æŒã•ã‚Œã¾ã™ã€‚", cmdHelp:"ã“ã®ãƒªã‚¹ãƒˆã‚’å†è¡¨ç¤ºã—ã¾ã™ã€‚",
      dataLabel:"ãƒ‡ãƒ¼ã‚¿", eraseData:"ã™ã¹ã¦ã®ãƒ‡ãƒ¼ã‚¿ã‚’å‰Šé™¤", eraseConfirmMsg:"ã™ã¹ã¦ã®APã€ã‚¿ã‚¹ã‚¯ã€å±¥æ­´ã€To-DoãŒå®Œå…¨ã«å‰Šé™¤ã•ã‚Œã¾ã™ã€‚å…ƒã«æˆ»ã›ã¾ã›ã‚“ã€‚",
      erasedMsg:"ã™ã¹ã¦ã®ãƒ‡ãƒ¼ã‚¿ã‚’å‰Šé™¤ã—ã¾ã—ãŸã€‚", cancelBtn:"ã‚­ãƒ£ãƒ³ã‚»ãƒ«", confirmBtn:"å‰Šé™¤", restoreHint:"ãƒãƒƒã‚¯ã‚¢ãƒƒãƒ—ã‹ã‚‰å¾©å…ƒã™ã‚‹ã«ã¯ Import ã‚’ä½¿ç”¨ã—ã¦ãã ã•ã„ã€‚",
      apTooltip:"APï¼Acta Pointã€‚ã‚¢ã‚¯ã‚·ãƒ§ãƒ³ã‚’å®Œäº†ã™ã‚‹ã¨ç²å¾—ã§ãã¾ã™ã€‚ãƒ¬ãƒ™ãƒ«ã¯RPGé¢¨ã®ã‚«ãƒ¼ãƒ–ã§åˆè¨ˆAPã‹ã‚‰ç®—å‡ºã•ã‚Œã€ç¯€ç›®ã®ãƒ¬ãƒ™ãƒ«ã«åˆ°é”ã™ã‚‹ã¨å°ã•ãªãŠç¥ã„ãŒã‚ã‚Šã¾ã™ã€‚",
      syncedAs:"{email} ã§ãƒ­ã‚°ã‚¤ãƒ³ä¸­", signOut:"ãƒ­ã‚°ã‚¢ã‚¦ãƒˆ", continueBtn:"ç¶šã‘ã‚‹", syncFillFields:"ãƒ¡ãƒ¼ãƒ«ã‚¢ãƒ‰ãƒ¬ã‚¹ã¨ãƒ‘ã‚¹ãƒ¯ãƒ¼ãƒ‰ã®ä¸¡æ–¹ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚",
      syncActiveNote:"ãƒ­ã‚°ã‚¤ãƒ³ä¸­ã¯ã€ãƒ‡ãƒã‚¤ã‚¹é–“ã§ãƒ‡ãƒ¼ã‚¿ãŒè‡ªå‹•çš„ã«åŒæœŸã•ã‚Œã¾ã™ã€‚",
      syncConflictMsg:"ã“ã®ã‚¢ã‚«ã‚¦ãƒ³ãƒˆã«ã¯åˆ¥ã®ãƒ‡ãƒã‚¤ã‚¹ã‹ã‚‰ä¿å­˜ã•ã‚ŒãŸãƒ‡ãƒ¼ã‚¿ãŒæ—¢ã«ã‚ã‚Šã¾ã™ã€‚ã©ã¡ã‚‰ã‚’ä½¿ç”¨ã—ã¾ã™ã‹ï¼Ÿ",
      syncKeepDevice:"ã“ã®ç«¯æœ«ã‚’ä½¿ã†", syncUseCloud:"ã‚¯ãƒ©ã‚¦ãƒ‰ã®ãƒ‡ãƒ¼ã‚¿ã‚’ä½¿ã†", syncUnavailable:"ç¾åœ¨åŒæœŸã‚’åˆ©ç”¨ã§ãã¾ã›ã‚“ã€‚æŽ¥ç¶šã‚’ç¢ºèªã—ã¦ãã ã•ã„ã€‚",
      todayLabel:"æœ¬æ—¥å®Œäº†", shortcutsHeader:"ã‚­ãƒ¼ãƒœãƒ¼ãƒ‰ã‚·ãƒ§ãƒ¼ãƒˆã‚«ãƒƒãƒˆ", scFocus:"å…¥åŠ›æ¬„ã«ãƒ•ã‚©ãƒ¼ã‚«ã‚¹", scEsc:"ãƒ€ã‚¤ã‚¢ãƒ­ã‚°ã‚’é–‰ã˜ã‚‹", scUndo:"å…ƒã«æˆ»ã™", scRedo:"ã‚„ã‚Šç›´ã™",
      scExport:"ãƒãƒƒã‚¯ã‚¢ãƒƒãƒ—ã‚’æ›¸ãå‡ºã™", scImport:"ãƒãƒƒã‚¯ã‚¢ãƒƒãƒ—ã‚’èª­ã¿è¾¼ã‚€", scStats:"çµ±è¨ˆã‚’é–‹ã", scTheme:"ãƒ†ãƒ¼ãƒžåˆ‡æ›¿", monthlyTitle:"æœˆåˆ¥é »åº¦",
      exportJsonLabel:"JSONã‚’æ›¸ãå‡ºã™", exportPdfLabel:"PDFã‚’æ›¸ãå‡ºã™", navActaCard:"Acta Card",
      profileNameLabel:"åå‰", profileNamePlaceholder:"ã‚ãªãŸã®åå‰", profileBioLabel:"è‡ªå·±ç´¹ä»‹", profileBioPlaceholder:"è‡ªå·±ç´¹ä»‹ã‚’æ›¸ã„ã¦ãã ã•ã„â€¦",
      profileCountryLabel:"å›½", profileCountryPlaceholder:"ã‚ãªãŸã®å›½", changeAvatarLabel:"ã‚¿ãƒƒãƒ—ã—ã¦å†™çœŸã‚’å¤‰æ›´",
      firstRunTitle:"ã‚ãªãŸã®æ­©ã¿ã‚’ä¿å­˜", firstRunMsg:"ã‚µã‚¤ãƒ³ã‚¤ãƒ³ã™ã‚‹ã¨ã€è¡Œå‹•ãƒ»é€£ç¶šè¨˜éŒ²ãƒ»é€²æ—ã‚’ã™ã¹ã¦ã®ãƒ‡ãƒã‚¤ã‚¹ã§å®‰å…¨ã«ä¿ã¦ã¾ã™ã€‚",
      firstRunSignIn:"ã‚µã‚¤ãƒ³ã‚¤ãƒ³", firstRunLater:"å¾Œã§",
      actaCardDownload:"ã‚«ãƒ¼ãƒ‰ã‚’ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰", actaCardTasksDone:"å®Œäº†ã—ãŸã‚¿ã‚¹ã‚¯", actaCardMaxStreak:"æœ€é•·é€£ç¶šè¨˜éŒ²", actaCardLinkProfile:"ãƒ—ãƒ­ãƒ•ã‚£ãƒ¼ãƒ«ãƒªãƒ³ã‚¯",
      actaCardThankYou:"ã‚ã‚ŠãŒã¨ã†", actaCardNeedSignIn:"Acta Cardã‚’ä½œæˆã™ã‚‹ã«ã¯ã‚µã‚¤ãƒ³ã‚¤ãƒ³ã—ã¦ãã ã•ã„", actaCardVerified:"èªè¨¼æ¸ˆã¿",
      publicProfileNotFound:"ãƒ—ãƒ­ãƒ•ã‚£ãƒ¼ãƒ«ãŒè¦‹ã¤ã‹ã‚Šã¾ã›ã‚“", publicProfileTryActa:"ã‚ãªãŸã‚‚Actaã‚’è©¦ã—ã¦ã¿ã‚‹", publicProfileLoading:"ãƒ—ãƒ­ãƒ•ã‚£ãƒ¼ãƒ«ã‚’èª­ã¿è¾¼ã¿ä¸­â€¦",
      settingsTitle:"è¨­å®š", pdfUnavailable:"PDFã®æ›¸ãå‡ºã—ã«ã¯ã‚¤ãƒ³ã‚¿ãƒ¼ãƒãƒƒãƒˆæŽ¥ç¶šãŒå¿…è¦ã§ã™ã€‚ã‚ªãƒ³ãƒ©ã‚¤ãƒ³ã«ãªã£ã¦ã‹ã‚‰å†è©¦è¡Œã—ã¦ãã ã•ã„ã€‚" },

    ko:{ tagline:"í•´ë‚¸ ì¼ â€” ê³„íší•œ ì¼ì´ ì•„ë‹ˆë¼", level:"ë ˆë²¨", ap:"AP", streak:"ì¼ ì—°ì†",
      stats:"í†µê³„", todo:"í•  ì¼", hint:"ë¶€ë‹´ ê°–ì§€ ë§ˆì„¸ìš”, ê·¸ì € ë‚˜ì•„ê°€ë©´ ë©ë‹ˆë‹¤. ì˜¤ëŠ˜ ë¬´ì—‡ì„ í•´ëƒˆë‚˜ìš”?",
      tabOverview:"ê°œìš”", tabHistory:"ê¸°ë¡", tabDaily:"ì¼ë³„", statsTitle:"í†µê³„",
      overviewEmpty:"ì €ìž¥ì†Œê°€ ë¹„ì–´ ìžˆìŠµë‹ˆë‹¤. /add <ìž‘ì—…> ì„ ìž…ë ¥í•´ ê¸°ë¡ì„ ì‹œìž‘í•˜ì„¸ìš”.",
      overviewSummary:"ì¶”ì  ì¤‘ì¸ ìž‘ì—… {count}ê°œ Â· ì´ {ap} AP",
      colTask:"ìž‘ì—…", colCount:"íšŸìˆ˜", colTotalAp:"ì´ AP", colDate:"ë‚ ì§œ", colTime:"ì‹œê°„", colAp:"AP",
      searchPlaceholder:"ìž‘ì—… ì´ë¦„ìœ¼ë¡œ ê²€ìƒ‰â€¦", clearFilters:"í•„í„° ì§€ìš°ê¸°", noMatch:"ì¼ì¹˜í•˜ëŠ” í•­ëª©ì´ ì—†ìŠµë‹ˆë‹¤.",
      dailyEntries:"ê¸°ë¡", dailyEmpty:"ì´ ë‚ ì—ëŠ” ê¸°ë¡ëœ ìž‘ì—…ì´ ì—†ìŠµë‹ˆë‹¤.", freqTitle:"ë¹ˆë„",
      todoAddPlaceholder:"ìž‘ì—… ì¶”ê°€â€¦", todoEmpty:"ì•„ì§ ì•„ë¬´ê²ƒë„ ì—†ì–´ìš”. ìœ„ì—ì„œ ì²« ìž‘ì—…ì„ ì¶”ê°€í•´ë³´ì„¸ìš”.",
      diffEasy:"ì‰¬ì›€", diffNormal:"ë³´í†µ", diffHard:"ì–´ë ¤ì›€",
      tabSync:"ë™ê¸°í™”", tabAchievements:"ì—…ì ", tabLanguage:"ì–¸ì–´",
      syncIntro:"ê³„ì •ì„ ì—°ê²°í•´ ì—¬ëŸ¬ ê¸°ê¸°ì—ì„œ ë°ì´í„°ë¥¼ ë™ê¸°í™”í•˜ì„¸ìš”.",
      syncSoon:"í´ë¼ìš°ë“œ ë™ê¸°í™”ëŠ” ì¶”í›„ ì—…ë°ì´íŠ¸ì—ì„œ ì œê³µë©ë‹ˆë‹¤. ì§€ê¸ˆì€ Export / Importë¥¼ ì´ìš©í•´ì£¼ì„¸ìš”.",
      syncGoogle:"Googleë¡œ ê³„ì†í•˜ê¸°", syncGithub:"GitHubë¡œ ê³„ì†í•˜ê¸°", syncApple:"Appleë¡œ ê³„ì†í•˜ê¸°", syncEmail:"ì´ë©”ì¼ë¡œ ê³„ì†í•˜ê¸°",
      achIntro:"ì´ ë ˆë²¨ì— ë„ë‹¬í•˜ë©´ ìž ê¸ˆì´ í•´ì œë©ë‹ˆë‹¤.", achLocked:"ìž ê¹€",
      langIntro:"ì–¸ì–´ë¥¼ ì„ íƒí•˜ì„¸ìš”. ëª¨ë“  í™”ë©´ê³¼ ë©”ì‹œì§€ê°€ ë°”ë€ë‹ˆë‹¤.",
      soundLabel:"ì†Œë¦¬", vibLabel:"ì§„ë™", volLabel:"ìŒëŸ‰", close:"ë‹«ê¸°",
      bootMsg:"ì„¸ì…˜ ì‹œìž‘ â€” Acta v3.6.3", philMsg:"ì² í•™: ê³„íšì´ ì•„ë‹ˆë¼ ì‹¤í–‰. ì¼ì • ëŒ€ì‹  ì¸ì •ì„.",
      helpMsg:"/helpë¡œ ëª…ë ¹ì–´ ëª©ë¡ì„ ë³´ê±°ë‚˜, ë°©ê¸ˆ í•œ ì¼ì„ ê·¸ëŒ€ë¡œ ìž…ë ¥í•˜ì„¸ìš”.", helpHeader:"ëª…ë ¹ì–´ ëª©ë¡",
      unknownCmd:"ì•Œ ìˆ˜ ì—†ëŠ” ëª…ë ¹ì–´: \"{cmd}\". /helpë¡œ ëª©ë¡ì„ í™•ì¸í•˜ì„¸ìš”.",
      addUsage:"ì‚¬ìš©ë²•: /add <ìž‘ì—…>", addInvalid:"ìœ íš¨í•˜ì§€ ì•Šì€ ìž‘ì—… ì´ë¦„ìž…ë‹ˆë‹¤.",
      addExisting:"+1 AP â€” \"{task}\" ({count}ë²ˆì§¸)", addNew:"ìƒˆ ìž‘ì—… ë“±ë¡ë¨: \"{task}\" (+1 AP)",
      delUsage:"ì‚¬ìš©ë²•: /del <ìž‘ì—…>", delOk:"\"{task}\"ì„(ë¥¼) ì €ìž¥ì†Œì—ì„œ ì‚­ì œí–ˆìŠµë‹ˆë‹¤.", delNotFound:"\"{task}\"ì„(ë¥¼) ì°¾ì„ ìˆ˜ ì—†ìŠµë‹ˆë‹¤.",
      clearedMsg:"í™”ë©´ì„ ì§€ì› ìŠµë‹ˆë‹¤. ë°ì´í„°ëŠ” ê·¸ëŒ€ë¡œ ìœ ì§€ë©ë‹ˆë‹¤.", exportedMsg:"ë°±ì—… íŒŒì¼ì„ ë‹¤ìš´ë¡œë“œí–ˆìŠµë‹ˆë‹¤.",
      importedMsg:"\"{file}\"ì—ì„œ ë°ì´í„°ë¥¼ ê°€ì ¸ì™”ìŠµë‹ˆë‹¤.", importFailed:"ê°€ì ¸ì˜¤ê¸° ì‹¤íŒ¨: ì˜¬ë°”ë¥¸ JSON íŒŒì¼ì´ ì•„ë‹™ë‹ˆë‹¤.", importReadFail:"ê°€ì ¸ì˜¤ê¸° ì‹¤íŒ¨: íŒŒì¼ì„ ì½ì„ ìˆ˜ ì—†ìŠµë‹ˆë‹¤.",
      undidMsg:"ë§ˆì§€ë§‰ ìž‘ì—…ì„ ì·¨ì†Œí–ˆìŠµë‹ˆë‹¤.", redidMsg:"ì·¨ì†Œí•œ ìž‘ì—…ì„ ë‹¤ì‹œ ì‹¤í–‰í–ˆìŠµë‹ˆë‹¤.",
      todoDoneMsg:"\"{task}\" ì™„ë£Œ (+{ap} AP) Â· í•  ì¼", levelUp:"ë ˆë²¨ {level}!", nicedBtn:"ì¢‹ì•„ìš”!", account:"ê³„ì •",
      cmdAdd:"ìž‘ì—…ì„ ê¸°ë¡í•©ë‹ˆë‹¤. ê¸°ì¡´ ìž‘ì—…ì€ AP ì¶”ê°€ ë° íšŸìˆ˜ +1, ìƒˆ ìž‘ì—…ì€ ìžë™ ë“±ë¡ë©ë‹ˆë‹¤.",
      cmdDel:"ì €ìž¥ì†Œì—ì„œ ìž‘ì—…ì„ ì‚­ì œí•©ë‹ˆë‹¤.", cmdList:"í†µê³„ë¥¼ ì—½ë‹ˆë‹¤.", cmdExport:"ë°ì´í„°ë¥¼ JSON ë°±ì—…ìœ¼ë¡œ ë‹¤ìš´ë¡œë“œí•©ë‹ˆë‹¤.",
      cmdImport:"JSON ë°±ì—… íŒŒì¼ì—ì„œ ë°ì´í„°ë¥¼ ë¶ˆëŸ¬ì˜µë‹ˆë‹¤.", cmdUndo:"ë§ˆì§€ë§‰ ìž‘ì—…ì„ ì·¨ì†Œí•©ë‹ˆë‹¤.", cmdRedo:"ì·¨ì†Œí•œ ìž‘ì—…ì„ ë‹¤ì‹œ ì‹¤í–‰í•©ë‹ˆë‹¤.",
      cmdTheme:"ë¼ì´íŠ¸/ë‹¤í¬ í…Œë§ˆë¥¼ ì „í™˜í•©ë‹ˆë‹¤.", cmdClear:"í™”ë©´ì„ ì§€ì›ë‹ˆë‹¤. ë°ì´í„°ëŠ” ìœ ì§€ë©ë‹ˆë‹¤.", cmdHelp:"ì´ ëª©ë¡ì„ ë‹¤ì‹œ í‘œì‹œí•©ë‹ˆë‹¤.",
      dataLabel:"ë°ì´í„°", eraseData:"ëª¨ë“  ë°ì´í„° ì‚­ì œ", eraseConfirmMsg:"ëª¨ë“  AP, ìž‘ì—…, ê¸°ë¡, í•  ì¼ì´ ì˜êµ¬ì ìœ¼ë¡œ ì‚­ì œë©ë‹ˆë‹¤. ë˜ëŒë¦´ ìˆ˜ ì—†ìŠµë‹ˆë‹¤.",
      erasedMsg:"ëª¨ë“  ë°ì´í„°ê°€ ì‚­ì œë˜ì—ˆìŠµë‹ˆë‹¤.", cancelBtn:"ì·¨ì†Œ", confirmBtn:"ì‚­ì œ", restoreHint:"ë°±ì—…ì—ì„œ ë³µì›í•˜ë ¤ë©´ Importë¥¼ ì‚¬ìš©í•˜ì„¸ìš”.",
      apTooltip:"AP = Acta Point, í–‰ë™ì„ ì™„ë£Œí•˜ë©´ íšë“í•©ë‹ˆë‹¤. ë ˆë²¨ì€ ì´ APë¥¼ ê¸°ë°˜ìœ¼ë¡œ RPG ìŠ¤íƒ€ì¼ ê³¡ì„ ìœ¼ë¡œ ê³„ì‚°ë˜ë©°, ë§ˆì¼ìŠ¤í†¤ ë ˆë²¨ì— ë„ë‹¬í•˜ë©´ ìž‘ì€ ì¶•í•˜ê°€ ìžˆìŠµë‹ˆë‹¤.",
      syncedAs:"{email}(ìœ¼)ë¡œ ë¡œê·¸ì¸ë¨", signOut:"ë¡œê·¸ì•„ì›ƒ", continueBtn:"ê³„ì†", syncFillFields:"ì´ë©”ì¼ê³¼ ë¹„ë°€ë²ˆí˜¸ë¥¼ ëª¨ë‘ ìž…ë ¥í•˜ì„¸ìš”.",
      syncActiveNote:"ë¡œê·¸ì¸ ìƒíƒœì—ì„œëŠ” ê¸°ê¸° ê°„ ë°ì´í„°ê°€ ìžë™ìœ¼ë¡œ ë™ê¸°í™”ë©ë‹ˆë‹¤.",
      syncConflictMsg:"ì´ ê³„ì •ì—ëŠ” ë‹¤ë¥¸ ê¸°ê¸°ì—ì„œ ì €ìž¥ëœ ë°ì´í„°ê°€ ì´ë¯¸ ìžˆìŠµë‹ˆë‹¤. ì–´ëŠ ìª½ì„ ìœ ì§€í•˜ì‹œê² ìŠµë‹ˆê¹Œ?",
      syncKeepDevice:"ì´ ê¸°ê¸° ìœ ì§€", syncUseCloud:"í´ë¼ìš°ë“œ ë°ì´í„° ì‚¬ìš©", syncUnavailable:"ì§€ê¸ˆì€ ë™ê¸°í™”ë¥¼ ì‚¬ìš©í•  ìˆ˜ ì—†ìŠµë‹ˆë‹¤ â€” ì—°ê²° ìƒíƒœë¥¼ í™•ì¸í•˜ì„¸ìš”.",
      todayLabel:"ì˜¤ëŠ˜ ì™„ë£Œ", shortcutsHeader:"í‚¤ë³´ë“œ ë‹¨ì¶•í‚¤", scFocus:"ìž…ë ¥ì°½ í¬ì»¤ìŠ¤", scEsc:"ëŒ€í™”ìƒìž ë‹«ê¸°", scUndo:"ì‹¤í–‰ ì·¨ì†Œ", scRedo:"ë‹¤ì‹œ ì‹¤í–‰",
      scExport:"ë°±ì—… ë‚´ë³´ë‚´ê¸°", scImport:"ë°±ì—… ê°€ì ¸ì˜¤ê¸°", scStats:"í†µê³„ ì—´ê¸°", scTheme:"í…Œë§ˆ ì „í™˜", monthlyTitle:"ì›”ë³„ ë¹ˆë„",
      exportJsonLabel:"JSON ë‚´ë³´ë‚´ê¸°", exportPdfLabel:"PDF ë‚´ë³´ë‚´ê¸°", navActaCard:"Acta Card",
      profileNameLabel:"ì´ë¦„", profileNamePlaceholder:"ë‹¹ì‹ ì˜ ì´ë¦„", profileBioLabel:"ì†Œê°œ", profileBioPlaceholder:"ìžì‹ ì„ ì†Œê°œí•´ ë³´ì„¸ìš”â€¦",
      profileCountryLabel:"êµ­ê°€", profileCountryPlaceholder:"ë‹¹ì‹ ì˜ êµ­ê°€", changeAvatarLabel:"íƒ­í•˜ì—¬ ì‚¬ì§„ ë³€ê²½",
      firstRunTitle:"ë‹¹ì‹ ì˜ ì—¬ì •ì„ ì €ìž¥í•˜ì„¸ìš”", firstRunMsg:"ë¡œê·¸ì¸í•˜ë©´ ëª¨ë“  ê¸°ê¸°ì—ì„œ í–‰ë™, ìŠ¤íŠ¸ë¦­, ì§„í–‰ ìƒí™©ì„ ì•ˆì „í•˜ê²Œ ì§€í‚¬ ìˆ˜ ìžˆìŠµë‹ˆë‹¤.",
      firstRunSignIn:"ë¡œê·¸ì¸", firstRunLater:"ë‚˜ì¤‘ì—",
      actaCardDownload:"ì¹´ë“œ ë‹¤ìš´ë¡œë“œ", actaCardTasksDone:"ì™„ë£Œí•œ ìž‘ì—…", actaCardMaxStreak:"ìµœëŒ€ ìŠ¤íŠ¸ë¦­", actaCardLinkProfile:"í”„ë¡œí•„ ë§í¬",
      actaCardThankYou:"ê°ì‚¬í•©ë‹ˆë‹¤", actaCardNeedSignIn:"Acta Cardë¥¼ ë§Œë“¤ë ¤ë©´ ë¡œê·¸ì¸í•˜ì„¸ìš”", actaCardVerified:"ì¸ì¦ë¨",
      publicProfileNotFound:"í”„ë¡œí•„ì„ ì°¾ì„ ìˆ˜ ì—†ìŠµë‹ˆë‹¤", publicProfileTryActa:"ì§ì ‘ Acta ì‚¬ìš©í•´ë³´ê¸°", publicProfileLoading:"í”„ë¡œí•„ ë¶ˆëŸ¬ì˜¤ëŠ” ì¤‘â€¦",
      settingsTitle:"ì„¤ì •", pdfUnavailable:"PDF ë‚´ë³´ë‚´ê¸°ì—ëŠ” ì¸í„°ë„· ì—°ê²°ì´ í•„ìš”í•©ë‹ˆë‹¤ â€” ì˜¨ë¼ì¸ ìƒíƒœì—ì„œ ë‹¤ì‹œ ì‹œë„í•˜ì„¸ìš”." },

    zh:{ tagline:"å·²å®Œæˆçš„äº‹ â€” è€Œéžè®¡åˆ’ä¸­çš„äº‹", level:"ç­‰çº§", ap:"AP", streak:"å¤©è¿žç»­",
      stats:"ç»Ÿè®¡", todo:"å¾…åŠž", hint:"ä¸å¿…æœ‰åŽ‹åŠ›ï¼Œåªç®¡å‰è¿›ã€‚ä½ ä»Šå¤©å®Œæˆäº†ä»€ä¹ˆï¼Ÿ",
      tabOverview:"æ¦‚è§ˆ", tabHistory:"åŽ†å²è®°å½•", tabDaily:"æ¯æ—¥", statsTitle:"ç»Ÿè®¡",
      overviewEmpty:"ä»“åº“æ˜¯ç©ºçš„ã€‚è¾“å…¥ /add <ä»»åŠ¡> å¼€å§‹è®°å½•ã€‚",
      overviewSummary:"å·²è·Ÿè¸ª {count} ä¸ªä»»åŠ¡ Â· å…± {ap} AP",
      colTask:"ä»»åŠ¡", colCount:"æ¬¡æ•°", colTotalAp:"æ€»AP", colDate:"æ—¥æœŸ", colTime:"æ—¶é—´", colAp:"AP",
      searchPlaceholder:"æŒ‰ä»»åŠ¡åç§°æœç´¢â€¦", clearFilters:"æ¸…é™¤ç­›é€‰", noMatch:"æ²¡æœ‰åŒ¹é…çš„è®°å½•ã€‚",
      dailyEntries:"è®°å½•", dailyEmpty:"è¿™ä¸€å¤©æ²¡æœ‰è®°å½•ä»»ä½•æ“ä½œã€‚", freqTitle:"é¢‘çŽ‡",
      todoAddPlaceholder:"æ·»åŠ ä¸€é¡¹ä»»åŠ¡â€¦", todoEmpty:"è¿™é‡Œè¿˜æ²¡æœ‰å†…å®¹ï¼Œè¯·åœ¨ä¸Šæ–¹æ·»åŠ ç¬¬ä¸€é¡¹ä»»åŠ¡ã€‚",
      diffEasy:"ç®€å•", diffNormal:"æ™®é€š", diffHard:"å›°éš¾",
      tabSync:"åŒæ­¥", tabAchievements:"æˆå°±", tabLanguage:"è¯­è¨€",
      syncIntro:"è¿žæŽ¥è´¦å·ä»¥åœ¨å¤šå°è®¾å¤‡é—´åŒæ­¥æ•°æ®ã€‚",
      syncSoon:"äº‘åŒæ­¥å°†åœ¨æœªæ¥æ›´æ–°ä¸­æŽ¨å‡ºã€‚ç›®å‰è¯·ä½¿ç”¨ å¯¼å‡º/å¯¼å…¥ åœ¨è®¾å¤‡é—´è½¬ç§»æ•°æ®ã€‚",
      syncGoogle:"ä½¿ç”¨ Google ç»§ç»­", syncGithub:"ä½¿ç”¨ GitHub ç»§ç»­", syncApple:"ä½¿ç”¨ Apple ç»§ç»­", syncEmail:"ä½¿ç”¨é‚®ç®±ç»§ç»­",
      achIntro:"è¾¾åˆ°è¿™äº›ç­‰çº§å³å¯è§£é”ã€‚", achLocked:"æœªè§£é”",
      langIntro:"é€‰æ‹©ä½ çš„è¯­è¨€ã€‚æ‰€æœ‰å†…å®¹éƒ½ä¼šåˆ‡æ¢â€”â€”æ¯ä¸ªç•Œé¢ã€æ¯æ¡æ¶ˆæ¯ã€‚",
      soundLabel:"å£°éŸ³", vibLabel:"éœ‡åŠ¨", volLabel:"éŸ³é‡", close:"å…³é—­",
      bootMsg:"ä¼šè¯å·²å¼€å§‹ â€” Acta v3.6.3", philMsg:"ç†å¿µï¼šé‡è¦çš„æ˜¯å·²å®Œæˆçš„äº‹ï¼Œè€Œéžè®¡åˆ’çš„äº‹ã€‚ä¸éœ€è¦æ—¥ç¨‹ï¼Œåªéœ€è¦è®¤å¯ã€‚",
      helpMsg:"è¾“å…¥ /help æŸ¥çœ‹å‘½ä»¤åˆ—è¡¨ï¼Œæˆ–ç›´æŽ¥è¾“å…¥ä½ åšäº†ä»€ä¹ˆã€‚", helpHeader:"å‘½ä»¤åˆ—è¡¨",
      unknownCmd:"æœªçŸ¥å‘½ä»¤ï¼šâ€œ{cmd}â€ã€‚è¾“å…¥ /help æŸ¥çœ‹åˆ—è¡¨ã€‚",
      addUsage:"ç”¨æ³•ï¼š/add <ä»»åŠ¡>", addInvalid:"è¯¥ä»»åŠ¡åç§°æ— æ•ˆã€‚",
      addExisting:"+1 AP â€” â€œ{task}â€ï¼ˆç¬¬{count}æ¬¡ï¼‰", addNew:"å·²æ³¨å†Œæ–°ä»»åŠ¡ï¼šâ€œ{task}â€ï¼ˆ+1 APï¼‰",
      delUsage:"ç”¨æ³•ï¼š/del <ä»»åŠ¡>", delOk:"å·²ä»Žä»“åº“ä¸­åˆ é™¤â€œ{task}â€ã€‚", delNotFound:"åœ¨ä»“åº“ä¸­æœªæ‰¾åˆ°â€œ{task}â€ã€‚",
      clearedMsg:"å±å¹•å·²æ¸…ç©ºï¼Œæ•°æ®æœªå—å½±å“ã€‚", exportedMsg:"å¤‡ä»½æ–‡ä»¶å·²ä¸‹è½½ã€‚",
      importedMsg:"å·²ä»Žâ€œ{file}â€å¯¼å…¥æ•°æ®ã€‚", importFailed:"å¯¼å…¥å¤±è´¥ï¼šæ–‡ä»¶ä¸æ˜¯æœ‰æ•ˆçš„JSONã€‚", importReadFail:"å¯¼å…¥å¤±è´¥ï¼šæ— æ³•è¯»å–æ–‡ä»¶ã€‚",
      undidMsg:"å·²æ’¤é”€ä¸Šä¸€æ­¥æ“ä½œã€‚", redidMsg:"å·²é‡åšè¢«æ’¤é”€çš„æ“ä½œã€‚",
      todoDoneMsg:"å·²å®Œæˆâ€œ{task}â€ï¼ˆ+{ap} APï¼‰Â· å¾…åŠž", levelUp:"ç­‰çº§ {level}ï¼", nicedBtn:"å¤ªæ£’äº†ï¼", account:"è´¦æˆ·",
      cmdAdd:"è®°å½•ä¸€æ¬¡è¡ŒåŠ¨ã€‚å·²æœ‰ä»»åŠ¡ï¼š+AP å¹¶è®¡æ•°+1ï¼›æ–°ä»»åŠ¡è‡ªåŠ¨æ³¨å†Œã€‚",
      cmdDel:"ä»Žä»“åº“ä¸­åˆ é™¤ä¸€ä¸ªä»»åŠ¡ã€‚", cmdList:"æ‰“å¼€ç»Ÿè®¡ã€‚", cmdExport:"ä¸‹è½½æ•°æ®çš„JSONå¤‡ä»½ã€‚",
      cmdImport:"ä»ŽJSONå¤‡ä»½æ–‡ä»¶åŠ è½½æ•°æ®ã€‚", cmdUndo:"æ’¤é”€ä¸Šä¸€æ­¥æ“ä½œã€‚", cmdRedo:"é‡åšè¢«æ’¤é”€çš„æ“ä½œã€‚",
      cmdTheme:"åˆ‡æ¢æµ…è‰²/æ·±è‰²ä¸»é¢˜ã€‚", cmdClear:"æ¸…ç©ºå±å¹•ï¼Œæ•°æ®å°†è¢«ä¿ç•™ã€‚", cmdHelp:"é‡æ–°æ˜¾ç¤ºæ­¤åˆ—è¡¨ã€‚",
      dataLabel:"æ•°æ®", eraseData:"æ¸…é™¤æ‰€æœ‰æ•°æ®", eraseConfirmMsg:"è¿™å°†æ°¸ä¹…åˆ é™¤ä½ æ‰€æœ‰çš„APã€ä»»åŠ¡ã€åŽ†å²è®°å½•å’Œå¾…åŠžäº‹é¡¹ï¼Œä¸”æ— æ³•æ’¤é”€ã€‚",
      erasedMsg:"æ‰€æœ‰æ•°æ®å·²æ¸…é™¤ã€‚", cancelBtn:"å–æ¶ˆ", confirmBtn:"æ¸…é™¤", restoreHint:"ä½¿ç”¨å¯¼å…¥å¯ä»Žå¤‡ä»½æ¢å¤ã€‚",
      apTooltip:"APï¼Acta Pointï¼Œå®Œæˆè¡ŒåŠ¨å³å¯èŽ·å¾—ã€‚ç­‰çº§æ ¹æ®æ€»APæŒ‰RPGé£Žæ ¼æ›²çº¿è®¡ç®—â€”â€”è¾¾åˆ°é‡Œç¨‹ç¢‘ç­‰çº§ä¼šæœ‰å°å°çš„åº†ç¥ã€‚",
      syncedAs:"å·²ä»¥ {email} ç™»å½•", signOut:"é€€å‡ºç™»å½•", continueBtn:"ç»§ç»­", syncFillFields:"è¯·è¾“å…¥é‚®ç®±å’Œå¯†ç ã€‚",
      syncActiveNote:"ç™»å½•åŽï¼Œä½ çš„æ•°æ®ä¼šåœ¨å„è®¾å¤‡é—´è‡ªåŠ¨åŒæ­¥ã€‚",
      syncConflictMsg:"è¯¥è´¦æˆ·å·²åœ¨å…¶ä»–è®¾å¤‡ä¸Šä¿å­˜äº†æ•°æ®ã€‚ä½ æƒ³ä¿ç•™å“ªä¸€ä»½ï¼Ÿ",
      syncKeepDevice:"ä¿ç•™æ­¤è®¾å¤‡", syncUseCloud:"ä½¿ç”¨äº‘ç«¯æ•°æ®", syncUnavailable:"ç›®å‰æ— æ³•åŒæ­¥â€”â€”è¯·æ£€æŸ¥ä½ çš„ç½‘ç»œè¿žæŽ¥ã€‚",
      todayLabel:"ä»Šå¤©å®Œæˆ", shortcutsHeader:"é”®ç›˜å¿«æ·é”®", scFocus:"èšç„¦è¾“å…¥æ¡†", scEsc:"å…³é—­å¯¹è¯æ¡†", scUndo:"æ’¤é”€", scRedo:"é‡åš",
      scExport:"å¯¼å‡ºå¤‡ä»½", scImport:"å¯¼å…¥å¤‡ä»½", scStats:"æ‰“å¼€ç»Ÿè®¡", scTheme:"åˆ‡æ¢ä¸»é¢˜", monthlyTitle:"æœˆåº¦é¢‘çŽ‡",
      exportJsonLabel:"å¯¼å‡º JSON", exportPdfLabel:"å¯¼å‡º PDF", navActaCard:"Acta Card",
      profileNameLabel:"å§“å", profileNamePlaceholder:"ä½ çš„åå­—", profileBioLabel:"ç®€ä»‹", profileBioPlaceholder:"ä»‹ç»ä¸€ä¸‹è‡ªå·±â€¦",
      profileCountryLabel:"å›½å®¶", profileCountryPlaceholder:"ä½ çš„å›½å®¶", changeAvatarLabel:"ç‚¹å‡»æ›´æ¢å¤´åƒ",
      firstRunTitle:"ä¿å­˜ä½ çš„æ—…ç¨‹", firstRunMsg:"ç™»å½•åŽï¼Œä½ çš„è¡ŒåŠ¨ã€è¿žç»­è®°å½•å’Œè¿›åº¦å°†åœ¨æ‰€æœ‰è®¾å¤‡ä¸Šå®‰å…¨ä¿å­˜ã€‚",
      firstRunSignIn:"ç™»å½•", firstRunLater:"ä»¥åŽå†è¯´",
      actaCardDownload:"ä¸‹è½½å¡ç‰‡", actaCardTasksDone:"å·²å®Œæˆä»»åŠ¡", actaCardMaxStreak:"æœ€é•¿è¿žç»­å¤©æ•°", actaCardLinkProfile:"ä¸ªäººä¸»é¡µé“¾æŽ¥",
      actaCardThankYou:"è°¢è°¢", actaCardNeedSignIn:"ç™»å½•ä»¥ç”Ÿæˆä½ çš„ Acta Card", actaCardVerified:"å·²éªŒè¯",
      publicProfileNotFound:"æœªæ‰¾åˆ°è¯¥èµ„æ–™", publicProfileTryActa:"äº²è‡ªè¯•è¯• Acta", publicProfileLoading:"æ­£åœ¨åŠ è½½èµ„æ–™â€¦",
      settingsTitle:"è®¾ç½®", pdfUnavailable:"å¯¼å‡ºPDFéœ€è¦è”ç½‘â€”â€”è¯·åœ¨è”ç½‘åŽé‡è¯•ã€‚" },

    ru:{ tagline:"ÑÐ´ÐµÐ»Ð°Ð½Ð½Ð¾Ðµ â€” Ð° Ð½Ðµ Ð·Ð°Ð¿Ð»Ð°Ð½Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ð¾Ðµ", level:"Ð£Ð ÐžÐ’Ð•ÐÐ¬", ap:"AP", streak:"Ð´Ð½ÐµÐ¹ Ð¿Ð¾Ð´Ñ€ÑÐ´",
      stats:"Ð¡Ñ‚Ð°Ñ‚Ð¸ÑÑ‚Ð¸ÐºÐ°", todo:"Ð—Ð°Ð´Ð°Ñ‡Ð¸", hint:"ÐÐ¸ÐºÐ°ÐºÐ¾Ð³Ð¾ Ð´Ð°Ð²Ð»ÐµÐ½Ð¸Ñ, Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð¿Ñ€Ð¾Ð³Ñ€ÐµÑÑ. Ð§Ñ‚Ð¾ Ð²Ñ‹ ÑÐ´ÐµÐ»Ð°Ð»Ð¸ ÑÐµÐ³Ð¾Ð´Ð½Ñ?",
      tabOverview:"ÐžÐ±Ð·Ð¾Ñ€", tabHistory:"Ð˜ÑÑ‚Ð¾Ñ€Ð¸Ñ", tabDaily:"ÐŸÐ¾ Ð´Ð½ÑÐ¼", statsTitle:"Ð¡Ð¢ÐÐ¢Ð˜Ð¡Ð¢Ð˜ÐšÐ",
      overviewEmpty:"Ð ÐµÐ¿Ð¾Ð·Ð¸Ñ‚Ð¾Ñ€Ð¸Ð¹ Ð¿ÑƒÑÑ‚. Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ /add <Ð·Ð°Ð´Ð°Ñ‡Ð°>, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð½Ð°Ñ‡Ð°Ñ‚ÑŒ.",
      overviewSummary:"Ð—Ð°Ð´Ð°Ñ‡ Ð² ÑÐ¿Ð¸ÑÐºÐµ: {count} Â· Ð²ÑÐµÐ³Ð¾ {ap} AP",
      colTask:"Ð—Ð°Ð´Ð°Ñ‡Ð°", colCount:"Ð Ð°Ð·", colTotalAp:"Ð’ÑÐµÐ³Ð¾ AP", colDate:"Ð”Ð°Ñ‚Ð°", colTime:"Ð’Ñ€ÐµÐ¼Ñ", colAp:"AP",
      searchPlaceholder:"ÐŸÐ¾Ð¸ÑÐº Ð¿Ð¾ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸ÑŽ Ð·Ð°Ð´Ð°Ñ‡Ð¸â€¦", clearFilters:"Ð¡Ð±Ñ€Ð¾ÑÐ¸Ñ‚ÑŒ Ñ„Ð¸Ð»ÑŒÑ‚Ñ€Ñ‹", noMatch:"Ð¡Ð¾Ð²Ð¿Ð°Ð´ÐµÐ½Ð¸Ð¹ Ð½Ðµ Ð½Ð°Ð¹Ð´ÐµÐ½Ð¾.",
      dailyEntries:"Ð—ÐÐŸÐ˜Ð¡Ð˜", dailyEmpty:"Ð’ ÑÑ‚Ð¾Ñ‚ Ð´ÐµÐ½ÑŒ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ð¹ Ð½Ðµ Ð·Ð°Ñ„Ð¸ÐºÑÐ¸Ñ€Ð¾Ð²Ð°Ð½Ð¾.", freqTitle:"Ð§ÐÐ¡Ð¢ÐžÐ¢Ð",
      todoAddPlaceholder:"Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ Ð·Ð°Ð´Ð°Ñ‡Ñƒâ€¦", todoEmpty:"ÐŸÐ¾ÐºÐ° Ð¿ÑƒÑÑ‚Ð¾. Ð”Ð¾Ð±Ð°Ð²ÑŒÑ‚Ðµ Ð¿ÐµÑ€Ð²ÑƒÑŽ Ð·Ð°Ð´Ð°Ñ‡Ñƒ Ð²Ñ‹ÑˆÐµ.",
      diffEasy:"Ð›ÐµÐ³ÐºÐ¾", diffNormal:"ÐžÐ±Ñ‹Ñ‡Ð½Ð¾", diffHard:"Ð¡Ð»Ð¾Ð¶Ð½Ð¾",
      tabSync:"Ð¡Ð¸Ð½Ñ…Ñ€.", tabAchievements:"Ð”Ð¾ÑÑ‚Ð¸Ð¶ÐµÐ½Ð¸Ñ", tabLanguage:"Ð¯Ð·Ñ‹Ðº",
      syncIntro:"ÐŸÐ¾Ð´ÐºÐ»ÑŽÑ‡Ð¸Ñ‚Ðµ Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚ Ð´Ð»Ñ ÑÐ¸Ð½Ñ…Ñ€Ð¾Ð½Ð¸Ð·Ð°Ñ†Ð¸Ð¸ Ð´Ð°Ð½Ð½Ñ‹Ñ… Ð¼ÐµÐ¶Ð´Ñƒ ÑƒÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ð°Ð¼Ð¸.",
      syncSoon:"ÐžÐ±Ð»Ð°Ñ‡Ð½Ð°Ñ ÑÐ¸Ð½Ñ…Ñ€Ð¾Ð½Ð¸Ð·Ð°Ñ†Ð¸Ñ Ð¿Ð¾ÑÐ²Ð¸Ñ‚ÑÑ Ð² Ð±ÑƒÐ´ÑƒÑ‰ÐµÐ¼ Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ð¸. ÐŸÐ¾ÐºÐ° Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐ¹Ñ‚Ðµ Ð­ÐºÑÐ¿Ð¾Ñ€Ñ‚ / Ð˜Ð¼Ð¿Ð¾Ñ€Ñ‚.",
      syncGoogle:"ÐŸÑ€Ð¾Ð´Ð¾Ð»Ð¶Ð¸Ñ‚ÑŒ Ñ Google", syncGithub:"ÐŸÑ€Ð¾Ð´Ð¾Ð»Ð¶Ð¸Ñ‚ÑŒ Ñ GitHub", syncApple:"ÐŸÑ€Ð¾Ð´Ð¾Ð»Ð¶Ð¸Ñ‚ÑŒ Ñ Apple", syncEmail:"ÐŸÑ€Ð¾Ð´Ð¾Ð»Ð¶Ð¸Ñ‚ÑŒ Ñ Email",
      achIntro:"Ð”Ð¾ÑÑ‚Ð¸Ð³Ð½Ð¸Ñ‚Ðµ ÑÑ‚Ð¸Ñ… ÑƒÑ€Ð¾Ð²Ð½ÐµÐ¹, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¾Ñ‚ÐºÑ€Ñ‹Ñ‚ÑŒ Ð¸Ñ….", achLocked:"Ð—Ð°Ð±Ð»Ð¾ÐºÐ¸Ñ€Ð¾Ð²Ð°Ð½Ð¾",
      langIntro:"Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ ÑÐ·Ñ‹Ðº. Ð˜Ð·Ð¼ÐµÐ½Ð¸Ñ‚ÑÑ Ð²ÑÑ‘ â€” ÐºÐ°Ð¶Ð´Ñ‹Ð¹ ÑÐºÑ€Ð°Ð½, ÐºÐ°Ð¶Ð´Ð¾Ðµ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ.",
      soundLabel:"Ð—Ð²ÑƒÐº", vibLabel:"Ð’Ð¸Ð±Ñ€Ð°Ñ†Ð¸Ñ", volLabel:"Ð“Ñ€Ð¾Ð¼ÐºÐ¾ÑÑ‚ÑŒ", close:"Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ",
      bootMsg:"Ð¡ÐµÑÑÐ¸Ñ Ð½Ð°Ñ‡Ð°Ñ‚Ð° â€” Acta v3.6.3", philMsg:"Ð¤Ð¸Ð»Ð¾ÑÐ¾Ñ„Ð¸Ñ: Ð²Ð°Ð¶Ð½Ð¾ ÑÐ´ÐµÐ»Ð°Ð½Ð½Ð¾Ðµ, Ð° Ð½Ðµ Ð·Ð°Ð¿Ð»Ð°Ð½Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ð¾Ðµ. ÐÐ¸ÐºÐ°ÐºÐ¾Ð³Ð¾ Ñ€Ð°ÑÐ¿Ð¸ÑÐ°Ð½Ð¸Ñ â€” Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð¿Ñ€Ð¸Ð·Ð½Ð°Ð½Ð¸Ðµ.",
      helpMsg:"Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ /help Ð´Ð»Ñ ÑÐ¿Ð¸ÑÐºÐ° ÐºÐ¾Ð¼Ð°Ð½Ð´ Ð¸Ð»Ð¸ Ð¿Ñ€Ð¾ÑÑ‚Ð¾ Ð¾Ð¿Ð¸ÑˆÐ¸Ñ‚Ðµ, Ñ‡Ñ‚Ð¾ Ð²Ñ‹ ÑÐ´ÐµÐ»Ð°Ð»Ð¸.", helpHeader:"Ð¡ÐŸÐ˜Ð¡ÐžÐš ÐšÐžÐœÐÐÐ”",
      unknownCmd:"ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð°Ñ ÐºÐ¾Ð¼Ð°Ð½Ð´Ð°: Â«{cmd}Â». Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ /help Ð´Ð»Ñ ÑÐ¿Ð¸ÑÐºÐ°.",
      addUsage:"Ð˜ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ðµ: /add <Ð·Ð°Ð´Ð°Ñ‡Ð°>", addInvalid:"ÐÐµÐ´Ð¾Ð¿ÑƒÑÑ‚Ð¸Ð¼Ð¾Ðµ Ð¸Ð¼Ñ Ð·Ð°Ð´Ð°Ñ‡Ð¸.",
      addExisting:"+1 AP â€” Â«{task}Â» (Ñ€Ð°Ð· â„–{count})", addNew:"Ð—Ð°Ñ€ÐµÐ³Ð¸ÑÑ‚Ñ€Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð° Ð½Ð¾Ð²Ð°Ñ Ð·Ð°Ð´Ð°Ñ‡Ð°: Â«{task}Â» (+1 AP)",
      delUsage:"Ð˜ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ðµ: /del <Ð·Ð°Ð´Ð°Ñ‡Ð°>", delOk:"Â«{task}Â» ÑƒÐ´Ð°Ð»ÐµÐ½Ð° Ð¸Ð· Ñ€ÐµÐ¿Ð¾Ð·Ð¸Ñ‚Ð¾Ñ€Ð¸Ñ.", delNotFound:"Â«{task}Â» Ð½Ðµ Ð½Ð°Ð¹Ð´ÐµÐ½Ð° Ð² Ñ€ÐµÐ¿Ð¾Ð·Ð¸Ñ‚Ð¾Ñ€Ð¸Ð¸.",
      clearedMsg:"Ð­ÐºÑ€Ð°Ð½ Ð¾Ñ‡Ð¸Ñ‰ÐµÐ½. Ð”Ð°Ð½Ð½Ñ‹Ðµ Ð½Ðµ Ð·Ð°Ñ‚Ñ€Ð¾Ð½ÑƒÑ‚Ñ‹.", exportedMsg:"Ð¤Ð°Ð¹Ð» Ñ€ÐµÐ·ÐµÑ€Ð²Ð½Ð¾Ð¹ ÐºÐ¾Ð¿Ð¸Ð¸ ÑÐºÐ°Ñ‡Ð°Ð½.",
      importedMsg:"Ð”Ð°Ð½Ð½Ñ‹Ðµ Ð¸Ð¼Ð¿Ð¾Ñ€Ñ‚Ð¸Ñ€Ð¾Ð²Ð°Ð½Ñ‹ Ð¸Ð· Â«{file}Â».", importFailed:"ÐžÑˆÐ¸Ð±ÐºÐ° Ð¸Ð¼Ð¿Ð¾Ñ€Ñ‚Ð°: Ñ„Ð°Ð¹Ð» Ð½Ðµ ÑÐ²Ð»ÑÐµÑ‚ÑÑ ÐºÐ¾Ñ€Ñ€ÐµÐºÑ‚Ð½Ñ‹Ð¼ JSON.", importReadFail:"ÐžÑˆÐ¸Ð±ÐºÐ° Ð¸Ð¼Ð¿Ð¾Ñ€Ñ‚Ð°: Ð½Ðµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ Ð¿Ñ€Ð¾Ñ‡Ð¸Ñ‚Ð°Ñ‚ÑŒ Ñ„Ð°Ð¹Ð».",
      undidMsg:"ÐŸÐ¾ÑÐ»ÐµÐ´Ð½ÐµÐµ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ðµ Ð¾Ñ‚Ð¼ÐµÐ½ÐµÐ½Ð¾.", redidMsg:"ÐžÑ‚Ð¼ÐµÐ½Ñ‘Ð½Ð½Ð¾Ðµ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ðµ Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€ÐµÐ½Ð¾.",
      todoDoneMsg:"Ð’Ñ‹Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¾ Â«{task}Â» (+{ap} AP) Â· Ð—Ð°Ð´Ð°Ñ‡Ð¸", levelUp:"Ð£Ñ€Ð¾Ð²ÐµÐ½ÑŒ {level}!", nicedBtn:"ÐžÑ‚Ð»Ð¸Ñ‡Ð½Ð¾!", account:"ÐÐºÐºÐ°ÑƒÐ½Ñ‚",
      cmdAdd:"Ð—Ð°Ð¿Ð¸ÑÑ‹Ð²Ð°ÐµÑ‚ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ðµ. Ð¡ÑƒÑ‰ÐµÑÑ‚Ð²ÑƒÑŽÑ‰Ð°Ñ Ð·Ð°Ð´Ð°Ñ‡Ð°: +AP Ð¸ ÑÑ‡Ñ‘Ñ‚Ñ‡Ð¸Ðº +1; Ð½Ð¾Ð²Ð°Ñ Ñ€ÐµÐ³Ð¸ÑÑ‚Ñ€Ð¸Ñ€ÑƒÐµÑ‚ÑÑ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸.",
      cmdDel:"Ð£Ð´Ð°Ð»ÑÐµÑ‚ Ð·Ð°Ð´Ð°Ñ‡Ñƒ Ð¸Ð· Ñ€ÐµÐ¿Ð¾Ð·Ð¸Ñ‚Ð¾Ñ€Ð¸Ñ.", cmdList:"ÐžÑ‚ÐºÑ€Ñ‹Ð²Ð°ÐµÑ‚ ÑÑ‚Ð°Ñ‚Ð¸ÑÑ‚Ð¸ÐºÑƒ.", cmdExport:"Ð¡ÐºÐ°Ñ‡Ð¸Ð²Ð°ÐµÑ‚ Ñ€ÐµÐ·ÐµÑ€Ð²Ð½ÑƒÑŽ ÐºÐ¾Ð¿Ð¸ÑŽ Ð´Ð°Ð½Ð½Ñ‹Ñ… Ð² JSON.",
      cmdImport:"Ð—Ð°Ð³Ñ€ÑƒÐ¶Ð°ÐµÑ‚ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð¸Ð· Ñ„Ð°Ð¹Ð»Ð° Ñ€ÐµÐ·ÐµÑ€Ð²Ð½Ð¾Ð¹ ÐºÐ¾Ð¿Ð¸Ð¸ JSON.", cmdUndo:"ÐžÑ‚Ð¼ÐµÐ½ÑÐµÑ‚ Ð¿Ð¾ÑÐ»ÐµÐ´Ð½ÐµÐµ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ðµ.", cmdRedo:"ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€ÑÐµÑ‚ Ð¾Ñ‚Ð¼ÐµÐ½Ñ‘Ð½Ð½Ð¾Ðµ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ðµ.",
      cmdTheme:"ÐŸÐµÑ€ÐµÐºÐ»ÑŽÑ‡Ð°ÐµÑ‚ ÑÐ²ÐµÑ‚Ð»ÑƒÑŽ/Ñ‚Ñ‘Ð¼Ð½ÑƒÑŽ Ñ‚ÐµÐ¼Ñƒ.", cmdClear:"ÐžÑ‡Ð¸Ñ‰Ð°ÐµÑ‚ ÑÐºÑ€Ð°Ð½. Ð”Ð°Ð½Ð½Ñ‹Ðµ ÑÐ¾Ñ…Ñ€Ð°Ð½ÑÑŽÑ‚ÑÑ.", cmdHelp:"ÐŸÐ¾ÐºÐ°Ð·Ñ‹Ð²Ð°ÐµÑ‚ ÑÑ‚Ð¾Ñ‚ ÑÐ¿Ð¸ÑÐ¾Ðº ÑÐ½Ð¾Ð²Ð°.",
      dataLabel:"Ð”Ð°Ð½Ð½Ñ‹Ðµ", eraseData:"Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ Ð²ÑÐµ Ð´Ð°Ð½Ð½Ñ‹Ðµ", eraseConfirmMsg:"Ð­Ñ‚Ð¾ Ð½Ð°Ð²ÑÐµÐ³Ð´Ð° ÑƒÐ´Ð°Ð»Ð¸Ñ‚ Ð²ÑÐµ Ð²Ð°ÑˆÐ¸ AP, Ð·Ð°Ð´Ð°Ñ‡Ð¸, Ð¸ÑÑ‚Ð¾Ñ€Ð¸ÑŽ Ð¸ ÑÐ¿Ð¸ÑÐ¾Ðº Ð´ÐµÐ». ÐžÑ‚Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ Ð½ÐµÐ»ÑŒÐ·Ñ.",
      erasedMsg:"Ð’ÑÐµ Ð´Ð°Ð½Ð½Ñ‹Ðµ ÑƒÐ´Ð°Ð»ÐµÐ½Ñ‹.", cancelBtn:"ÐžÑ‚Ð¼ÐµÐ½Ð°", confirmBtn:"Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ", restoreHint:"Ð˜ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐ¹Ñ‚Ðµ Ð˜Ð¼Ð¿Ð¾Ñ€Ñ‚, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð²Ð¾ÑÑÑ‚Ð°Ð½Ð¾Ð²Ð¸Ñ‚ÑŒ Ð¸Ð· Ñ€ÐµÐ·ÐµÑ€Ð²Ð½Ð¾Ð¹ ÐºÐ¾Ð¿Ð¸Ð¸.",
      apTooltip:"AP = Acta Point, Ð½Ð°Ñ‡Ð¸ÑÐ»ÑÐµÑ‚ÑÑ Ð·Ð° Ð²Ñ‹Ð¿Ð¾Ð»Ð½ÐµÐ½Ð½Ñ‹Ðµ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ. Ð£Ñ€Ð¾Ð²ÐµÐ½ÑŒ Ñ€Ð°ÑÑÑ‡Ð¸Ñ‚Ñ‹Ð²Ð°ÐµÑ‚ÑÑ Ð¿Ð¾ Ð¾Ð±Ñ‰ÐµÐ¼Ñƒ AP Ð¿Ð¾ RPG-ÐºÑ€Ð¸Ð²Ð¾Ð¹ â€” Ð´Ð¾ÑÑ‚Ð¸Ð³Ð°Ð¹Ñ‚Ðµ ÑƒÑ€Ð¾Ð²Ð½ÐµÐ¹-Ð²ÐµÑ… Ñ€Ð°Ð´Ð¸ Ð½ÐµÐ±Ð¾Ð»ÑŒÑˆÐ¾Ð³Ð¾ Ð¿Ñ€Ð°Ð·Ð´Ð½Ð¸ÐºÐ°.",
      syncedAs:"Ð’Ñ‹ Ð²Ð¾ÑˆÐ»Ð¸ ÐºÐ°Ðº {email}", signOut:"Ð’Ñ‹Ð¹Ñ‚Ð¸", continueBtn:"ÐŸÑ€Ð¾Ð´Ð¾Ð»Ð¶Ð¸Ñ‚ÑŒ", syncFillFields:"Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ email Ð¸ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ.",
      syncActiveNote:"Ð¢ÐµÐ¿ÐµÑ€ÑŒ Ð²Ð°ÑˆÐ¸ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸ ÑÐ¸Ð½Ñ…Ñ€Ð¾Ð½Ð¸Ð·Ð¸Ñ€ÑƒÑŽÑ‚ÑÑ Ð¼ÐµÐ¶Ð´Ñƒ ÑƒÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ð°Ð¼Ð¸, Ð¿Ð¾ÐºÐ° Ð²Ñ‹ Ð² ÑÐ¸ÑÑ‚ÐµÐ¼Ðµ.",
      syncConflictMsg:"ÐÐ° ÑÑ‚Ð¾Ð¼ Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚Ðµ ÑƒÐ¶Ðµ ÐµÑÑ‚ÑŒ ÑÐ¾Ñ…Ñ€Ð°Ð½Ñ‘Ð½Ð½Ñ‹Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ñ Ð´Ñ€ÑƒÐ³Ð¾Ð³Ð¾ ÑƒÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ð°. ÐšÐ°ÐºÐ¸Ðµ Ð¾ÑÑ‚Ð°Ð²Ð¸Ñ‚ÑŒ?",
      syncKeepDevice:"ÐžÑÑ‚Ð°Ð²Ð¸Ñ‚ÑŒ ÑÑ‚Ð¾ ÑƒÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ð¾", syncUseCloud:"Ð˜ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ Ð¾Ð±Ð»Ð°Ñ‡Ð½Ñ‹Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ", syncUnavailable:"Ð¡Ð¸Ð½Ñ…Ñ€Ð¾Ð½Ð¸Ð·Ð°Ñ†Ð¸Ñ ÑÐµÐ¹Ñ‡Ð°Ñ Ð½ÐµÐ´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ð° â€” Ð¿Ñ€Ð¾Ð²ÐµÑ€ÑŒÑ‚Ðµ Ð¿Ð¾Ð´ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ðµ.",
      todayLabel:"ÑÐ´ÐµÐ»Ð°Ð½Ð¾ ÑÐµÐ³Ð¾Ð´Ð½Ñ", shortcutsHeader:"Ð“ÐžÐ Ð¯Ð§Ð˜Ð• ÐšÐ›ÐÐ’Ð˜Ð¨Ð˜", scFocus:"Ð¤Ð¾ÐºÑƒÑ Ð½Ð° Ð¿Ð¾Ð»Ðµ Ð²Ð²Ð¾Ð´Ð°", scEsc:"Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ Ð´Ð¸Ð°Ð»Ð¾Ð³Ð¸", scUndo:"ÐžÑ‚Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ", scRedo:"ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚ÑŒ",
      scExport:"Ð­ÐºÑÐ¿Ð¾Ñ€Ñ‚ Ñ€ÐµÐ·ÐµÑ€Ð²Ð½Ð¾Ð¹ ÐºÐ¾Ð¿Ð¸Ð¸", scImport:"Ð˜Ð¼Ð¿Ð¾Ñ€Ñ‚ Ñ€ÐµÐ·ÐµÑ€Ð²Ð½Ð¾Ð¹ ÐºÐ¾Ð¿Ð¸Ð¸", scStats:"ÐžÑ‚ÐºÑ€Ñ‹Ñ‚ÑŒ ÑÑ‚Ð°Ñ‚Ð¸ÑÑ‚Ð¸ÐºÑƒ", scTheme:"Ð¡Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ Ñ‚ÐµÐ¼Ñƒ", monthlyTitle:"Ð§ÐÐ¡Ð¢ÐžÐ¢Ð ÐŸÐž ÐœÐ•Ð¡Ð¯Ð¦ÐÐœ",
      exportJsonLabel:"Ð­ÐºÑÐ¿Ð¾Ñ€Ñ‚ JSON", exportPdfLabel:"Ð­ÐºÑÐ¿Ð¾Ñ€Ñ‚ PDF", navActaCard:"Acta Card",
      profileNameLabel:"Ð˜Ð¼Ñ", profileNamePlaceholder:"Ð’Ð°ÑˆÐµ Ð¸Ð¼Ñ", profileBioLabel:"Ðž ÑÐµÐ±Ðµ", profileBioPlaceholder:"Ð Ð°ÑÑÐºÐ°Ð¶Ð¸Ñ‚Ðµ Ð¾ ÑÐµÐ±Ðµâ€¦",
      profileCountryLabel:"Ð¡Ñ‚Ñ€Ð°Ð½Ð°", profileCountryPlaceholder:"Ð’Ð°ÑˆÐ° ÑÑ‚Ñ€Ð°Ð½Ð°", changeAvatarLabel:"ÐÐ°Ð¶Ð¼Ð¸Ñ‚Ðµ, Ñ‡Ñ‚Ð¾Ð±Ñ‹ ÑÐ¼ÐµÐ½Ð¸Ñ‚ÑŒ Ñ„Ð¾Ñ‚Ð¾",
      firstRunTitle:"Ð¡Ð¾Ñ…Ñ€Ð°Ð½Ð¸Ñ‚Ðµ ÑÐ²Ð¾Ð¹ Ð¿ÑƒÑ‚ÑŒ", firstRunMsg:"Ð’Ð¾Ð¹Ð´Ð¸Ñ‚Ðµ, Ñ‡Ñ‚Ð¾Ð±Ñ‹ ÑÐ¾Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÑŒ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ, ÑÐµÑ€Ð¸Ð¸ Ð¸ Ð¿Ñ€Ð¾Ð³Ñ€ÐµÑÑ Ð½Ð° Ð²ÑÐµÑ… ÑƒÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ð°Ñ….",
      firstRunSignIn:"Ð’Ð¾Ð¹Ñ‚Ð¸", firstRunLater:"ÐœÐ¾Ð¶ÐµÑ‚ Ð±Ñ‹Ñ‚ÑŒ Ð¿Ð¾Ð·Ð¶Ðµ",
      actaCardDownload:"Ð¡ÐºÐ°Ñ‡Ð°Ñ‚ÑŒ ÐºÐ°Ñ€Ñ‚Ð¾Ñ‡ÐºÑƒ", actaCardTasksDone:"Ð’Ñ‹Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¾ Ð·Ð°Ð´Ð°Ñ‡", actaCardMaxStreak:"ÐœÐ°ÐºÑ. ÑÐµÑ€Ð¸Ñ", actaCardLinkProfile:"Ð¡ÑÑ‹Ð»ÐºÐ° Ð¿Ñ€Ð¾Ñ„Ð¸Ð»Ñ",
      actaCardThankYou:"Ð¡Ð¿Ð°ÑÐ¸Ð±Ð¾", actaCardNeedSignIn:"Ð’Ð¾Ð¹Ð´Ð¸Ñ‚Ðµ, Ñ‡Ñ‚Ð¾Ð±Ñ‹ ÑÐ¾Ð·Ð´Ð°Ñ‚ÑŒ ÑÐ²Ð¾ÑŽ Acta Card", actaCardVerified:"ÐŸÑ€Ð¾Ð²ÐµÑ€ÐµÐ½Ð¾",
      publicProfileNotFound:"ÐŸÑ€Ð¾Ñ„Ð¸Ð»ÑŒ Ð½Ðµ Ð½Ð°Ð¹Ð´ÐµÐ½", publicProfileTryActa:"ÐŸÐ¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹Ñ‚Ðµ Acta ÑÐ°Ð¼Ð¸", publicProfileLoading:"Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ° Ð¿Ñ€Ð¾Ñ„Ð¸Ð»Ñâ€¦",
      settingsTitle:"ÐÐ°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸", pdfUnavailable:"Ð”Ð»Ñ ÑÐºÑÐ¿Ð¾Ñ€Ñ‚Ð° Ð² PDF Ð½ÑƒÐ¶Ð½Ð¾ Ð¿Ð¾Ð´ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ðµ Ðº Ð¸Ð½Ñ‚ÐµÑ€Ð½ÐµÑ‚Ñƒ â€” Ð¿Ð¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹Ñ‚Ðµ ÑÐ½Ð¾Ð²Ð°, ÐºÐ¾Ð³Ð´Ð° Ð±ÑƒÐ´ÐµÑ‚Ðµ Ð¾Ð½Ð»Ð°Ð¹Ð½." },

    hi:{ tagline:"à¤œà¥‹ à¤•à¤¿à¤¯à¤¾ â€” à¤œà¥‹ à¤¯à¥‹à¤œà¤¨à¤¾ à¤¬à¤¨à¤¾à¤ˆ à¤µà¥‹ à¤¨à¤¹à¥€à¤‚", level:"à¤¸à¥à¤¤à¤°", ap:"AP", streak:"à¤¦à¤¿à¤¨ à¤²à¤—à¤¾à¤¤à¤¾à¤°",
      stats:"à¤†à¤à¤•à¤¡à¤¼à¥‡", todo:"à¤•à¤¾à¤°à¥à¤¯ à¤¸à¥‚à¤šà¥€", hint:"à¤•à¥‹à¤ˆ à¤¦à¤¬à¤¾à¤µ à¤¨à¤¹à¥€à¤‚, à¤¬à¤¸ à¤ªà¥à¤°à¤—à¤¤à¤¿à¥¤ à¤†à¤œ à¤†à¤ªà¤¨à¥‡ à¤•à¥à¤¯à¤¾ à¤ªà¥‚à¤°à¤¾ à¤•à¤¿à¤¯à¤¾?",
      tabOverview:"à¤…à¤µà¤²à¥‹à¤•à¤¨", tabHistory:"à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸", tabDaily:"à¤¦à¥ˆà¤¨à¤¿à¤•", statsTitle:"à¤†à¤à¤•à¤¡à¤¼à¥‡",
      overviewEmpty:"à¤°à¤¿à¤ªà¥‰à¤œà¤¼à¤¿à¤Ÿà¤°à¥€ à¤–à¤¾à¤²à¥€ à¤¹à¥ˆà¥¤ à¤¶à¥à¤°à¥‚ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ /add <à¤•à¤¾à¤°à¥à¤¯> à¤Ÿà¤¾à¤‡à¤ª à¤•à¤°à¥‡à¤‚à¥¤",
      overviewSummary:"{count} à¤•à¤¾à¤°à¥à¤¯ à¤Ÿà¥à¤°à¥ˆà¤• à¤¹à¥‹ à¤°à¤¹à¥‡ à¤¹à¥ˆà¤‚ Â· à¤•à¥à¤² {ap} AP",
      colTask:"à¤•à¤¾à¤°à¥à¤¯", colCount:"à¤¬à¤¾à¤°", colTotalAp:"à¤•à¥à¤² AP", colDate:"à¤¤à¤¾à¤°à¥€à¤–", colTime:"à¤¸à¤®à¤¯", colAp:"AP",
      searchPlaceholder:"à¤•à¤¾à¤°à¥à¤¯ à¤¨à¤¾à¤® à¤¸à¥‡ à¤–à¥‹à¤œà¥‡à¤‚â€¦", clearFilters:"à¤«à¤¼à¤¿à¤²à¥à¤Ÿà¤° à¤¹à¤Ÿà¤¾à¤à¤", noMatch:"à¤•à¥‹à¤ˆ à¤®à¥‡à¤² à¤¨à¤¹à¥€à¤‚ à¤®à¤¿à¤²à¤¾à¥¤",
      dailyEntries:"à¤ªà¥à¤°à¤µà¤¿à¤·à¥à¤Ÿà¤¿à¤¯à¤¾à¤", dailyEmpty:"à¤‡à¤¸ à¤¦à¤¿à¤¨ à¤•à¥‹à¤ˆ à¤•à¤¾à¤°à¥à¤¯ à¤¦à¤°à¥à¤œ à¤¨à¤¹à¥€à¤‚ à¤¹à¥à¤†à¥¤", freqTitle:"à¤†à¤µà¥ƒà¤¤à¥à¤¤à¤¿",
      todoAddPlaceholder:"à¤•à¤¾à¤°à¥à¤¯ à¤œà¥‹à¤¡à¤¼à¥‡à¤‚â€¦", todoEmpty:"à¤…à¤­à¥€ à¤¯à¤¹à¤¾à¤ à¤•à¥à¤› à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¥¤ à¤Šà¤ªà¤° à¤…à¤ªà¤¨à¤¾ à¤ªà¤¹à¤²à¤¾ à¤•à¤¾à¤°à¥à¤¯ à¤œà¥‹à¤¡à¤¼à¥‡à¤‚à¥¤",
      diffEasy:"à¤†à¤¸à¤¾à¤¨", diffNormal:"à¤¸à¤¾à¤®à¤¾à¤¨à¥à¤¯", diffHard:"à¤•à¤ à¤¿à¤¨",
      tabSync:"à¤¸à¤¿à¤‚à¤•", tabAchievements:"à¤‰à¤ªà¤²à¤¬à¥à¤§à¤¿à¤¯à¤¾à¤", tabLanguage:"à¤­à¤¾à¤·à¤¾",
      syncIntro:"à¤¡à¤¿à¤µà¤¾à¤‡à¤¸ à¤•à¥‡ à¤¬à¥€à¤š à¤¡à¥‡à¤Ÿà¤¾ à¤¸à¤¿à¤‚à¤• à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤–à¤¾à¤¤à¤¾ à¤œà¥‹à¤¡à¤¼à¥‡à¤‚à¥¤",
      syncSoon:"à¤•à¥à¤²à¤¾à¤‰à¤¡ à¤¸à¤¿à¤‚à¤• à¤­à¤µà¤¿à¤·à¥à¤¯ à¤•à¥‡ à¤…à¤ªà¤¡à¥‡à¤Ÿ à¤®à¥‡à¤‚ à¤†à¤à¤—à¤¾à¥¤ à¤…à¤­à¥€ à¤•à¥‡ à¤²à¤¿à¤ Export / Import à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¥‡à¤‚à¥¤",
      syncGoogle:"Google à¤¸à¥‡ à¤œà¤¾à¤°à¥€ à¤°à¤–à¥‡à¤‚", syncGithub:"GitHub à¤¸à¥‡ à¤œà¤¾à¤°à¥€ à¤°à¤–à¥‡à¤‚", syncApple:"Apple à¤¸à¥‡ à¤œà¤¾à¤°à¥€ à¤°à¤–à¥‡à¤‚", syncEmail:"à¤ˆà¤®à¥‡à¤² à¤¸à¥‡ à¤œà¤¾à¤°à¥€ à¤°à¤–à¥‡à¤‚",
      achIntro:"à¤‡à¤¨ à¤¸à¥à¤¤à¤°à¥‹à¤‚ à¤¤à¤• à¤ªà¤¹à¥à¤à¤šà¤•à¤° à¤‡à¤¨à¥à¤¹à¥‡à¤‚ à¤…à¤¨à¤²à¥‰à¤• à¤•à¤°à¥‡à¤‚à¥¤", achLocked:"à¤²à¥‰à¤•à¥à¤¡",
      langIntro:"à¤…à¤ªà¤¨à¥€ à¤­à¤¾à¤·à¤¾ à¤šà¥à¤¨à¥‡à¤‚à¥¤ à¤¸à¤¬ à¤•à¥à¤› à¤¬à¤¦à¤² à¤œà¤¾à¤à¤—à¤¾ â€” à¤¹à¤° à¤¸à¥à¤•à¥à¤°à¥€à¤¨, à¤¹à¤° à¤¸à¤‚à¤¦à¥‡à¤¶à¥¤",
      soundLabel:"à¤§à¥à¤µà¤¨à¤¿", vibLabel:"à¤•à¤‚à¤ªà¤¨", volLabel:"à¤†à¤µà¤¾à¤œà¤¼", close:"à¤¬à¤‚à¤¦ à¤•à¤°à¥‡à¤‚",
      bootMsg:"à¤¸à¤¤à¥à¤° à¤¶à¥à¤°à¥‚ à¤¹à¥à¤† â€” Acta v3.6.3", philMsg:"à¤¦à¤°à¥à¤¶à¤¨: à¤œà¥‹ à¤•à¤¿à¤¯à¤¾ à¤µà¤¹ à¤®à¤¾à¤¯à¤¨à¥‡ à¤°à¤–à¤¤à¤¾ à¤¹à¥ˆ, à¤œà¥‹ à¤¯à¥‹à¤œà¤¨à¤¾ à¤¬à¤¨à¤¾à¤ˆ à¤µà¤¹ à¤¨à¤¹à¥€à¤‚à¥¤ à¤•à¥‹à¤ˆ à¤¶à¥‡à¤¡à¥à¤¯à¥‚à¤² à¤¨à¤¹à¥€à¤‚, à¤¸à¤¿à¤°à¥à¤«à¤¼ à¤ªà¤¹à¤šà¤¾à¤¨à¥¤",
      helpMsg:"à¤•à¤®à¤¾à¤‚à¤¡ à¤¸à¥‚à¤šà¥€ à¤•à¥‡ à¤²à¤¿à¤ /help à¤Ÿà¤¾à¤‡à¤ª à¤•à¤°à¥‡à¤‚, à¤¯à¤¾ à¤¬à¤¸ à¤¬à¤¤à¤¾à¤à¤‚ à¤•à¤¿ à¤†à¤ªà¤¨à¥‡ à¤•à¥à¤¯à¤¾ à¤•à¤¿à¤¯à¤¾à¥¤", helpHeader:"à¤•à¤®à¤¾à¤‚à¤¡ à¤¸à¥‚à¤šà¥€",
      unknownCmd:"à¤…à¤œà¥à¤žà¤¾à¤¤ à¤•à¤®à¤¾à¤‚à¤¡: \"{cmd}\"à¥¤ à¤¸à¥‚à¤šà¥€ à¤•à¥‡ à¤²à¤¿à¤ /help à¤Ÿà¤¾à¤‡à¤ª à¤•à¤°à¥‡à¤‚à¥¤",
      addUsage:"à¤‰à¤ªà¤¯à¥‹à¤—: /add <à¤•à¤¾à¤°à¥à¤¯>", addInvalid:"à¤¯à¤¹ à¤•à¤¾à¤°à¥à¤¯ à¤¨à¤¾à¤® à¤®à¤¾à¤¨à¥à¤¯ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¥¤",
      addExisting:"+1 AP â€” \"{task}\" (#{count})", addNew:"à¤¨à¤¯à¤¾ à¤•à¤¾à¤°à¥à¤¯ à¤¦à¤°à¥à¤œ à¤¹à¥à¤†: \"{task}\" (+1 AP)",
      delUsage:"à¤‰à¤ªà¤¯à¥‹à¤—: /del <à¤•à¤¾à¤°à¥à¤¯>", delOk:"\"{task}\" à¤¹à¤Ÿà¤¾ à¤¦à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾à¥¤", delNotFound:"\"{task}\" à¤¨à¤¹à¥€à¤‚ à¤®à¤¿à¤²à¤¾à¥¤",
      clearedMsg:"à¤¸à¥à¤•à¥à¤°à¥€à¤¨ à¤¸à¤¾à¤«à¤¼ à¤¹à¥‹ à¤—à¤ˆà¥¤ à¤¡à¥‡à¤Ÿà¤¾ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤¹à¥ˆà¥¤", exportedMsg:"à¤¬à¥ˆà¤•à¤…à¤ª à¤«à¤¼à¤¾à¤‡à¤² à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤¹à¥à¤ˆà¥¤",
      importedMsg:"\"{file}\" à¤¸à¥‡ à¤¡à¥‡à¤Ÿà¤¾ à¤†à¤¯à¤¾à¤¤ à¤¹à¥à¤†à¥¤", importFailed:"à¤†à¤¯à¤¾à¤¤ à¤µà¤¿à¤«à¤²: à¤«à¤¼à¤¾à¤‡à¤² à¤®à¤¾à¤¨à¥à¤¯ JSON à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¥¤", importReadFail:"à¤†à¤¯à¤¾à¤¤ à¤µà¤¿à¤«à¤²: à¤«à¤¼à¤¾à¤‡à¤² à¤ªà¤¢à¤¼à¥€ à¤¨à¤¹à¥€à¤‚ à¤œà¤¾ à¤¸à¤•à¥€à¥¤",
      undidMsg:"à¤ªà¤¿à¤›à¤²à¥€ à¤•à¤¾à¤°à¥à¤°à¤µà¤¾à¤ˆ à¤ªà¥‚à¤°à¥à¤µà¤µà¤¤ à¤•à¥€ à¤—à¤ˆà¥¤", redidMsg:"à¤ªà¥‚à¤°à¥à¤µà¤µà¤¤ à¤•à¥€ à¤—à¤ˆ à¤•à¤¾à¤°à¥à¤°à¤µà¤¾à¤ˆ à¤«à¤¿à¤° à¤¸à¥‡ à¤•à¥€ à¤—à¤ˆà¥¤",
      todoDoneMsg:"\"{task}\" à¤ªà¥‚à¤°à¤¾ à¤¹à¥à¤† (+{ap} AP) Â· à¤•à¤¾à¤°à¥à¤¯ à¤¸à¥‚à¤šà¥€", levelUp:"à¤¸à¥à¤¤à¤° {level}!", nicedBtn:"à¤¬à¤¢à¤¼à¤¿à¤¯à¤¾!", account:"à¤–à¤¾à¤¤à¤¾",
      cmdAdd:"à¤à¤• à¤•à¤¾à¤°à¥à¤°à¤µà¤¾à¤ˆ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚à¥¤ à¤®à¥Œà¤œà¥‚à¤¦à¤¾ à¤•à¤¾à¤°à¥à¤¯: +AP à¤”à¤° à¤—à¤¿à¤¨à¤¤à¥€ +1; à¤¨à¤¯à¤¾ à¤•à¤¾à¤°à¥à¤¯ à¤¸à¥à¤µà¤¤à¤ƒ à¤¦à¤°à¥à¤œ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆà¥¤",
      cmdDel:"à¤°à¤¿à¤ªà¥‰à¤œà¤¼à¤¿à¤Ÿà¤°à¥€ à¤¸à¥‡ à¤•à¤¾à¤°à¥à¤¯ à¤¹à¤Ÿà¤¾à¤à¤à¥¤", cmdList:"à¤†à¤à¤•à¤¡à¤¼à¥‡ à¤–à¥‹à¤²à¥‡à¤‚à¥¤", cmdExport:"à¤¡à¥‡à¤Ÿà¤¾ à¤•à¤¾ JSON à¤¬à¥ˆà¤•à¤…à¤ª à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚à¥¤",
      cmdImport:"JSON à¤¬à¥ˆà¤•à¤…à¤ª à¤«à¤¼à¤¾à¤‡à¤² à¤¸à¥‡ à¤¡à¥‡à¤Ÿà¤¾ à¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚à¥¤", cmdUndo:"à¤ªà¤¿à¤›à¤²à¥€ à¤•à¤¾à¤°à¥à¤°à¤µà¤¾à¤ˆ à¤ªà¥‚à¤°à¥à¤µà¤µà¤¤ à¤•à¤°à¥‡à¤‚à¥¤", cmdRedo:"à¤ªà¥‚à¤°à¥à¤µà¤µà¤¤ à¤•à¥€ à¤—à¤ˆ à¤•à¤¾à¤°à¥à¤°à¤µà¤¾à¤ˆ à¤«à¤¿à¤° à¤¸à¥‡ à¤•à¤°à¥‡à¤‚à¥¤",
      cmdTheme:"à¤²à¤¾à¤‡à¤Ÿ/à¤¡à¤¾à¤°à¥à¤• à¤¥à¥€à¤® à¤¬à¤¦à¤²à¥‡à¤‚à¥¤", cmdClear:"à¤¸à¥à¤•à¥à¤°à¥€à¤¨ à¤¸à¤¾à¤«à¤¼ à¤•à¤°à¥‡à¤‚à¥¤ à¤¡à¥‡à¤Ÿà¤¾ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤°à¤¹à¥‡à¤—à¤¾à¥¤", cmdHelp:"à¤¯à¤¹ à¤¸à¥‚à¤šà¥€ à¤«à¤¿à¤° à¤¸à¥‡ à¤¦à¤¿à¤–à¤¾à¤à¤à¥¤",
      dataLabel:"à¤¡à¥‡à¤Ÿà¤¾", eraseData:"à¤¸à¤­à¥€ à¤¡à¥‡à¤Ÿà¤¾ à¤®à¤¿à¤Ÿà¤¾à¤à¤", eraseConfirmMsg:"à¤‡à¤¸à¤¸à¥‡ à¤†à¤ªà¤•à¤¾ à¤¸à¤¾à¤°à¤¾ AP, à¤•à¤¾à¤°à¥à¤¯, à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸ à¤”à¤° à¤•à¤¾à¤°à¥à¤¯ à¤¸à¥‚à¤šà¥€ à¤¸à¥à¤¥à¤¾à¤¯à¥€ à¤°à¥‚à¤ª à¤¸à¥‡ à¤®à¤¿à¤Ÿ à¤œà¤¾à¤à¤—à¥€à¥¤ à¤‡à¤¸à¥‡ à¤ªà¥‚à¤°à¥à¤µà¤µà¤¤ à¤¨à¤¹à¥€à¤‚ à¤•à¤¿à¤¯à¤¾ à¤œà¤¾ à¤¸à¤•à¤¤à¤¾à¥¤",
      erasedMsg:"à¤¸à¤¾à¤°à¤¾ à¤¡à¥‡à¤Ÿà¤¾ à¤®à¤¿à¤Ÿà¤¾ à¤¦à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾à¥¤", cancelBtn:"à¤°à¤¦à¥à¤¦ à¤•à¤°à¥‡à¤‚", confirmBtn:"à¤®à¤¿à¤Ÿà¤¾à¤à¤", restoreHint:"à¤¬à¥ˆà¤•à¤…à¤ª à¤¸à¥‡ à¤ªà¥à¤¨à¤°à¥à¤¸à¥à¤¥à¤¾à¤ªà¤¿à¤¤ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ Import à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¥‡à¤‚à¥¤",
      apTooltip:"AP = Acta Point, à¤•à¤¾à¤°à¥à¤¯ à¤ªà¥‚à¤°à¤¾ à¤•à¤°à¤¨à¥‡ à¤ªà¤° à¤®à¤¿à¤²à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤¸à¥à¤¤à¤° à¤•à¥à¤² AP à¤¸à¥‡ RPG-à¤¶à¥ˆà¤²à¥€ à¤µà¤•à¥à¤° à¤¦à¥à¤µà¤¾à¤°à¤¾ à¤—à¤£à¤¨à¤¾ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆ â€” à¤®à¥€à¤² à¤•à¥‡ à¤ªà¤¤à¥à¤¥à¤° à¤¸à¥à¤¤à¤°à¥‹à¤‚ à¤ªà¤° à¤ªà¤¹à¥à¤à¤šà¤•à¤° à¤à¤• à¤›à¥‹à¤Ÿà¤¾ à¤‰à¤¤à¥à¤¸à¤µ à¤®à¤¨à¤¾à¤à¤‚à¥¤",
      syncedAs:"{email} à¤•à¥‡ à¤°à¥‚à¤ª à¤®à¥‡à¤‚ à¤¸à¤¾à¤‡à¤¨ à¤‡à¤¨ à¤•à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾", signOut:"à¤¸à¤¾à¤‡à¤¨ à¤†à¤‰à¤Ÿ à¤•à¤°à¥‡à¤‚", continueBtn:"à¤œà¤¾à¤°à¥€ à¤°à¤–à¥‡à¤‚", syncFillFields:"à¤•à¥ƒà¤ªà¤¯à¤¾ à¤ˆà¤®à¥‡à¤² à¤”à¤° à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¦à¥‹à¤¨à¥‹à¤‚ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚à¥¤",
      syncActiveNote:"à¤¸à¤¾à¤‡à¤¨ à¤‡à¤¨ à¤°à¤¹à¤¤à¥‡ à¤¹à¥à¤ à¤…à¤¬ à¤†à¤ªà¤•à¤¾ à¤¡à¥‡à¤Ÿà¤¾ à¤†à¤ªà¤•à¥‡ à¤¡à¤¿à¤µà¤¾à¤‡à¤¸ à¤•à¥‡ à¤¬à¥€à¤š à¤…à¤ªà¤¨à¥‡ à¤†à¤ª à¤¸à¤¿à¤‚à¤• à¤¹à¥‹à¤—à¤¾à¥¤",
      syncConflictMsg:"à¤‡à¤¸ à¤–à¤¾à¤¤à¥‡ à¤®à¥‡à¤‚ à¤ªà¤¹à¤²à¥‡ à¤¸à¥‡ à¤¹à¥€ à¤•à¤¿à¤¸à¥€ à¤…à¤¨à¥à¤¯ à¤¡à¤¿à¤µà¤¾à¤‡à¤¸ à¤•à¤¾ à¤¸à¥‡à¤µ à¤•à¤¿à¤¯à¤¾ à¤¹à¥à¤† à¤¡à¥‡à¤Ÿà¤¾ à¤¹à¥ˆà¥¤ à¤†à¤ª à¤•à¥Œà¤¨ à¤¸à¤¾ à¤°à¤–à¤¨à¤¾ à¤šà¤¾à¤¹à¥‡à¤‚à¤—à¥‡?",
      syncKeepDevice:"à¤¯à¤¹ à¤¡à¤¿à¤µà¤¾à¤‡à¤¸ à¤°à¤–à¥‡à¤‚", syncUseCloud:"à¤•à¥à¤²à¤¾à¤‰à¤¡ à¤¡à¥‡à¤Ÿà¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¥‡à¤‚", syncUnavailable:"à¤…à¤­à¥€ à¤¸à¤¿à¤‚à¤• à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆ â€” à¤…à¤ªà¤¨à¤¾ à¤•à¤¨à¥‡à¤•à¥à¤¶à¤¨ à¤œà¤¾à¤à¤šà¥‡à¤‚à¥¤",
      todayLabel:"à¤†à¤œ à¤•à¤¿à¤ à¤—à¤", shortcutsHeader:"à¤•à¥€à¤¬à¥‹à¤°à¥à¤¡ à¤¶à¥‰à¤°à¥à¤Ÿà¤•à¤Ÿ", scFocus:"à¤‡à¤¨à¤ªà¥à¤Ÿ à¤ªà¤° à¤«à¤¼à¥‹à¤•à¤¸ à¤•à¤°à¥‡à¤‚", scEsc:"à¤¡à¤¾à¤¯à¤²à¥‰à¤— à¤¬à¤‚à¤¦ à¤•à¤°à¥‡à¤‚", scUndo:"à¤ªà¥‚à¤°à¥à¤µà¤µà¤¤ à¤•à¤°à¥‡à¤‚", scRedo:"à¤«à¤¿à¤° à¤¸à¥‡ à¤•à¤°à¥‡à¤‚",
      scExport:"à¤¬à¥ˆà¤•à¤…à¤ª à¤à¤•à¥à¤¸à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤°à¥‡à¤‚", scImport:"à¤¬à¥ˆà¤•à¤…à¤ª à¤‡à¤®à¥à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤°à¥‡à¤‚", scStats:"à¤†à¤à¤•à¤¡à¤¼à¥‡ à¤–à¥‹à¤²à¥‡à¤‚", scTheme:"à¤¥à¥€à¤® à¤¬à¤¦à¤²à¥‡à¤‚", monthlyTitle:"à¤®à¤¾à¤¸à¤¿à¤• à¤†à¤µà¥ƒà¤¤à¥à¤¤à¤¿",
      exportJsonLabel:"JSON à¤à¤•à¥à¤¸à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤°à¥‡à¤‚", exportPdfLabel:"PDF à¤à¤•à¥à¤¸à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤°à¥‡à¤‚", navActaCard:"Acta Card",
      profileNameLabel:"à¤¨à¤¾à¤®", profileNamePlaceholder:"à¤†à¤ªà¤•à¤¾ à¤¨à¤¾à¤®", profileBioLabel:"à¤¬à¤¾à¤¯à¥‹", profileBioPlaceholder:"à¤…à¤ªà¤¨à¥‡ à¤¬à¤¾à¤°à¥‡ à¤®à¥‡à¤‚ à¤¬à¤¤à¤¾à¤à¤‚â€¦",
      profileCountryLabel:"à¤¦à¥‡à¤¶", profileCountryPlaceholder:"à¤†à¤ªà¤•à¤¾ à¤¦à¥‡à¤¶", changeAvatarLabel:"à¤«à¤¼à¥‹à¤Ÿà¥‹ à¤¬à¤¦à¤²à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤Ÿà¥ˆà¤ª à¤•à¤°à¥‡à¤‚",
      firstRunTitle:"à¤…à¤ªà¤¨à¥€ à¤¯à¤¾à¤¤à¥à¤°à¤¾ à¤¸à¤¹à¥‡à¤œà¥‡à¤‚", firstRunMsg:"à¤¸à¤¾à¤‡à¤¨ à¤‡à¤¨ à¤•à¤°à¥‡à¤‚ à¤¤à¤¾à¤•à¤¿ à¤†à¤ªà¤•à¥‡ à¤•à¤¾à¤°à¥à¤¯, à¤¸à¥à¤Ÿà¥à¤°à¥€à¤• à¤”à¤° à¤ªà¥à¤°à¤—à¤¤à¤¿ à¤¹à¤° à¤¡à¤¿à¤µà¤¾à¤‡à¤¸ à¤ªà¤° à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤°à¤¹à¥‡à¤‚à¥¤",
      firstRunSignIn:"à¤¸à¤¾à¤‡à¤¨ à¤‡à¤¨ à¤•à¤°à¥‡à¤‚", firstRunLater:"à¤¬à¤¾à¤¦ à¤®à¥‡à¤‚",
      actaCardDownload:"à¤•à¤¾à¤°à¥à¤¡ à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚", actaCardTasksDone:"à¤ªà¥‚à¤°à¥‡ à¤•à¤¿à¤ à¤—à¤ à¤•à¤¾à¤°à¥à¤¯", actaCardMaxStreak:"à¤…à¤§à¤¿à¤•à¤¤à¤® à¤¸à¥à¤Ÿà¥à¤°à¥€à¤•", actaCardLinkProfile:"à¤ªà¥à¤°à¥‹à¤«à¤¼à¤¾à¤‡à¤² à¤²à¤¿à¤‚à¤•",
      actaCardThankYou:"à¤§à¤¨à¥à¤¯à¤µà¤¾à¤¦", actaCardNeedSignIn:"à¤…à¤ªà¤¨à¤¾ Acta Card à¤¬à¤¨à¤¾à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¤¾à¤‡à¤¨ à¤‡à¤¨ à¤•à¤°à¥‡à¤‚", actaCardVerified:"à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¿à¤¤",
      publicProfileNotFound:"à¤ªà¥à¤°à¥‹à¤«à¤¼à¤¾à¤‡à¤² à¤¨à¤¹à¥€à¤‚ à¤®à¤¿à¤²à¥€", publicProfileTryActa:"à¤–à¥à¤¦ Acta à¤†à¤œà¤¼à¤®à¤¾à¤à¤‚", publicProfileLoading:"à¤ªà¥à¤°à¥‹à¤«à¤¼à¤¾à¤‡à¤² à¤²à¥‹à¤¡ à¤¹à¥‹ à¤°à¤¹à¥€ à¤¹à¥ˆâ€¦",
      settingsTitle:"à¤¸à¥‡à¤Ÿà¤¿à¤‚à¤—à¥à¤¸", pdfUnavailable:"PDF à¤à¤•à¥à¤¸à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¥‡ à¤²à¤¿à¤ à¤‡à¤‚à¤Ÿà¤°à¤¨à¥‡à¤Ÿ à¤•à¤¨à¥‡à¤•à¥à¤¶à¤¨ à¤šà¤¾à¤¹à¤¿à¤ â€” à¤‘à¤¨à¤²à¤¾à¤‡à¤¨ à¤¹à¥‹à¤¨à¥‡ à¤ªà¤° à¤«à¤¿à¤° à¤¸à¥‡ à¤•à¥‹à¤¶à¤¿à¤¶ à¤•à¤°à¥‡à¤‚à¥¤" },

    id:{ tagline:"hal yang dilakukan â€” bukan yang direncanakan", level:"LEVEL", ap:"AP", streak:"hari beruntun",
      stats:"Statistik", todo:"To-Do", hint:"Tanpa tekanan, hanya kemajuan. Apa yang kamu selesaikan hari ini?",
      tabOverview:"Ringkasan", tabHistory:"Riwayat", tabDaily:"Harian", statsTitle:"STATISTIK",
      overviewEmpty:"Repositori kosong. Ketik /add <tugas> untuk mulai mencatat.",
      overviewSummary:"{count} tugas terlacak Â· total {ap} AP",
      colTask:"Tugas", colCount:"Jumlah", colTotalAp:"Total AP", colDate:"Tanggal", colTime:"Waktu", colAp:"AP",
      searchPlaceholder:"Cari berdasarkan nama tugasâ€¦", clearFilters:"Hapus filter", noMatch:"Tidak ada hasil yang cocok.",
      dailyEntries:"CATATAN", dailyEmpty:"Tidak ada aktivitas tercatat di hari ini.", freqTitle:"FREKUENSI",
      todoAddPlaceholder:"Tambah tugasâ€¦", todoEmpty:"Belum ada apa-apa di sini. Tambahkan tugas pertamamu di atas.",
      diffEasy:"Mudah", diffNormal:"Normal", diffHard:"Sulit",
      tabSync:"Sinkron", tabAchievements:"Pencapaian", tabLanguage:"Bahasa",
      syncIntro:"Hubungkan akun untuk menyinkronkan data di berbagai perangkat.",
      syncSoon:"Sinkronisasi cloud akan hadir di pembaruan mendatang. Untuk saat ini, gunakan Export / Import.",
      syncGoogle:"Lanjutkan dengan Google", syncGithub:"Lanjutkan dengan GitHub", syncApple:"Lanjutkan dengan Apple", syncEmail:"Lanjutkan dengan Email",
      achIntro:"Capai level ini untuk membukanya.", achLocked:"Terkunci",
      langIntro:"Pilih bahasamu. Semuanya akan berubah â€” setiap layar, setiap pesan.",
      soundLabel:"Suara", vibLabel:"Getaran", volLabel:"Volume", close:"Tutup",
      bootMsg:"Sesi dimulai â€” Acta v3.6.3", philMsg:"Filosofi: yang dikerjakan, bukan yang direncanakan. Tanpa jadwal, hanya pengakuan.",
      helpMsg:"Ketik /help untuk daftar perintah, atau langsung ketik apa yang kamu lakukan.", helpHeader:"DAFTAR PERINTAH",
      unknownCmd:"Perintah tidak dikenal: \"{cmd}\". Ketik /help untuk daftar.",
      addUsage:"Penggunaan: /add <tugas>", addInvalid:"Nama tugas itu tidak valid.",
      addExisting:"+1 AP â€” \"{task}\" (ke-{count})", addNew:"Tugas baru terdaftar: \"{task}\" (+1 AP)",
      delUsage:"Penggunaan: /del <tugas>", delOk:"\"{task}\" telah dihapus dari repositori.", delNotFound:"\"{task}\" tidak ditemukan.",
      clearedMsg:"Layar dibersihkan. Data kamu tetap aman.", exportedMsg:"File cadangan telah diunduh.",
      importedMsg:"Data diimpor dari \"{file}\".", importFailed:"Impor gagal: file bukan JSON yang valid.", importReadFail:"Impor gagal: file tidak dapat dibaca.",
      undidMsg:"Tindakan terakhir dibatalkan.", redidMsg:"Tindakan yang dibatalkan diulang kembali.",
      todoDoneMsg:"Selesai \"{task}\" (+{ap} AP) Â· To-Do", levelUp:"Level {level}!", nicedBtn:"Mantap!", account:"Akun",
      cmdAdd:"Mencatat sebuah tindakan. Tugas yang ada: +AP dan hitungan +1; tugas baru terdaftar otomatis.",
      cmdDel:"Menghapus tugas dari repositori.", cmdList:"Membuka Statistik.", cmdExport:"Mengunduh cadangan data dalam JSON.",
      cmdImport:"Memuat data dari file cadangan JSON.", cmdUndo:"Membatalkan tindakan terakhir.", cmdRedo:"Mengulang tindakan yang dibatalkan.",
      cmdTheme:"Beralih tema terang/gelap.", cmdClear:"Membersihkan layar. Data tetap disimpan.", cmdHelp:"Menampilkan daftar ini lagi.",
      dataLabel:"Data", eraseData:"Hapus semua data", eraseConfirmMsg:"Ini akan menghapus semua AP, tugas, riwayat, dan to-do kamu secara permanen. Tidak bisa dibatalkan.",
      erasedMsg:"Semua data telah dihapus.", cancelBtn:"Batal", confirmBtn:"Hapus", restoreHint:"Gunakan Import untuk memulihkan dari cadangan.",
      apTooltip:"AP = Acta Point, didapat dengan menyelesaikan tindakan. Level dihitung dari total AP dengan kurva gaya RPG â€” capai level tonggak untuk perayaan kecil.",
      syncedAs:"Masuk sebagai {email}", signOut:"Keluar", continueBtn:"Lanjutkan", syncFillFields:"Isi email dan kata sandi.",
      syncActiveNote:"Data kamu sekarang otomatis tersinkron di seluruh perangkat selama kamu masuk.",
      syncConflictMsg:"Akun ini sudah punya data tersimpan dari perangkat lain. Mana yang ingin kamu simpan?",
      syncKeepDevice:"Simpan perangkat ini", syncUseCloud:"Gunakan data cloud", syncUnavailable:"Sinkronisasi tidak tersedia sekarang â€” periksa koneksi kamu.",
      todayLabel:"selesai hari ini", shortcutsHeader:"PINTASAN KEYBOARD", scFocus:"Fokus ke input", scEsc:"Tutup dialog", scUndo:"Urungkan", scRedo:"Ulangi",
      scExport:"Ekspor cadangan", scImport:"Impor cadangan", scStats:"Buka Statistik", scTheme:"Ganti tema", monthlyTitle:"FREKUENSI BULANAN",
      exportJsonLabel:"Ekspor JSON", exportPdfLabel:"Ekspor PDF", navActaCard:"Acta Card",
      profileNameLabel:"Nama", profileNamePlaceholder:"Nama kamu", profileBioLabel:"Bio", profileBioPlaceholder:"Ceritakan tentang dirimuâ€¦",
      profileCountryLabel:"Negara", profileCountryPlaceholder:"Negara kamu", changeAvatarLabel:"Ketuk untuk ganti foto",
      firstRunTitle:"Simpan perjalananmu", firstRunMsg:"Masuk untuk menjaga tindakan, streak, dan progres kamu tetap aman di semua perangkat.",
      firstRunSignIn:"Masuk", firstRunLater:"Nanti saja",
      actaCardDownload:"Unduh Card", actaCardTasksDone:"Tugas selesai", actaCardMaxStreak:"Streak maksimum", actaCardLinkProfile:"Tautan profil",
      actaCardThankYou:"Terima kasih", actaCardNeedSignIn:"Masuk untuk membuat Acta Card kamu", actaCardVerified:"Terverifikasi",
      publicProfileNotFound:"Profil tidak ditemukan", publicProfileTryActa:"Coba Acta sendiri", publicProfileLoading:"Memuat profilâ€¦",
      settingsTitle:"Pengaturan", pdfUnavailable:"Ekspor PDF butuh koneksi internet â€” coba lagi saat kamu online." }
  };

  var SLOGANS = {
    en:{0:"Every journey begins with a single step. Start your first action today!",
        5:"Momentum built! You're turning small actions into daily power.",
        10:"Consistency unlocked! Action is becoming your second nature.",
        25:"Unstoppable force! You've built a solid fortress of achievements.",
        50:"Master of Action! Overcoming procrastination is now your default state.",
        100:"Legendary Status! 100 levels of pure dedication and discipline.",
        200:"Ultimate Apex! You've conquered yourself and mastered the art of doing. Absolutely legendary!"},
    vi:{0:"Má»i hÃ nh trÃ¬nh Ä‘á»u báº¯t Ä‘áº§u tá»« má»™t bÆ°á»›c chÃ¢n. HÃ£y báº¯t Ä‘áº§u hÃ nh Ä‘á»™ng Ä‘áº§u tiÃªn ngay hÃ´m nay!",
        5:"ÄÃ  Ä‘Ã£ cÃ³! Báº¡n Ä‘ang biáº¿n nhá»¯ng hÃ nh Ä‘á»™ng nhá» thÃ nh sá»©c máº¡nh má»—i ngÃ y.",
        10:"ÄÃ£ má»Ÿ khÃ³a sá»± bá»n bá»‰! HÃ nh Ä‘á»™ng Ä‘ang dáº§n trá»Ÿ thÃ nh báº£n nÄƒng cá»§a báº¡n.",
        25:"Sá»©c máº¡nh khÃ´ng thá»ƒ ngÄƒn cáº£n! Báº¡n Ä‘Ã£ xÃ¢y má»™t phÃ¡o Ä‘Ã i thÃ nh tá»±u vá»¯ng cháº¯c.",
        50:"Báº­c tháº§y hÃ nh Ä‘á»™ng! VÆ°á»£t qua trÃ¬ hoÃ£n giá» lÃ  tráº¡ng thÃ¡i máº·c Ä‘á»‹nh cá»§a báº¡n.",
        100:"Vá»‹ tháº¿ huyá»n thoáº¡i! 100 cáº¥p Ä‘á»™ cá»§a sá»± táº­n tÃ¢m vÃ  ká»· luáº­t thuáº§n tÃºy.",
        200:"Äá»‰nh cao tuyá»‡t Ä‘á»‘i! Báº¡n Ä‘Ã£ chinh phá»¥c chÃ­nh mÃ¬nh vÃ  lÃ m chá»§ nghá»‡ thuáº­t hÃ nh Ä‘á»™ng. Thá»±c sá»± huyá»n thoáº¡i!"},
    es:{0:"Todo viaje comienza con un solo paso. Â¡Empieza tu primera acciÃ³n hoy!",
        5:"Â¡Impulso conseguido! EstÃ¡s convirtiendo pequeÃ±as acciones en poder diario.",
        10:"Â¡Constancia desbloqueada! La acciÃ³n se estÃ¡ volviendo tu segunda naturaleza.",
        25:"Â¡Fuerza imparable! Has construido una sÃ³lida fortaleza de logros.",
        50:"Â¡Maestro de la AcciÃ³n! Superar la procrastinaciÃ³n ya es tu estado natural.",
        100:"Â¡Estatus Legendario! 100 niveles de pura dedicaciÃ³n y disciplina.",
        200:"Â¡Apex Definitivo! Te has conquistado a ti mismo y dominado el arte de hacer. Â¡Absolutamente legendario!"},
    fr:{0:"Tout voyage commence par un premier pas. Lancez votre premiÃ¨re action aujourd'hui !",
        5:"Ã‰lan crÃ©Ã© ! Vous transformez de petites actions en puissance quotidienne.",
        10:"RÃ©gularitÃ© dÃ©bloquÃ©e ! L'action devient votre seconde nature.",
        25:"Force inarrÃªtable ! Vous avez bÃ¢ti une solide forteresse de rÃ©ussites.",
        50:"MaÃ®tre de l'Action ! Vaincre la procrastination est dÃ©sormais votre Ã©tat par dÃ©faut.",
        100:"Statut LÃ©gendaire ! 100 niveaux de pure discipline et de dÃ©vouement.",
        200:"ApogÃ©e Absolu ! Vous vous Ãªtes surpassÃ© et avez maÃ®trisÃ© l'art de faire. Absolument lÃ©gendaire !"},
    de:{0:"Jede Reise beginnt mit einem ersten Schritt. Starte noch heute deine erste Aktion!",
        5:"Schwung aufgebaut! Du verwandelst kleine Aktionen in tÃ¤gliche Kraft.",
        10:"BestÃ¤ndigkeit freigeschaltet! Handeln wird zu deiner zweiten Natur.",
        25:"Unaufhaltsame Kraft! Du hast eine solide Festung aus Erfolgen errichtet.",
        50:"Meister der Tat! Prokrastination zu Ã¼berwinden ist jetzt dein Normalzustand.",
        100:"LegendÃ¤rer Status! 100 Stufen puren Einsatzes und Disziplin.",
        200:"Absoluter Gipfel! Du hast dich selbst Ã¼berwunden und die Kunst des Tuns gemeistert. Absolut legendÃ¤r!"},
    pt:{0:"Toda jornada comeÃ§a com um Ãºnico passo. Comece sua primeira aÃ§Ã£o hoje!",
        5:"Impulso criado! VocÃª estÃ¡ transformando pequenas aÃ§Ãµes em poder diÃ¡rio.",
        10:"ConsistÃªncia desbloqueada! A aÃ§Ã£o estÃ¡ se tornando sua segunda natureza.",
        25:"ForÃ§a imparÃ¡vel! VocÃª construiu uma sÃ³lida fortaleza de conquistas.",
        50:"Mestre da AÃ§Ã£o! Superar a procrastinaÃ§Ã£o agora Ã© seu estado padrÃ£o.",
        100:"Status LendÃ¡rio! 100 nÃ­veis de pura dedicaÃ§Ã£o e disciplina.",
        200:"Ãpice Absoluto! VocÃª conquistou a si mesmo e dominou a arte de fazer. Absolutamente lendÃ¡rio!"},
    ja:{0:"ã™ã¹ã¦ã®æ—…ã¯ä¸€æ­©ã‹ã‚‰å§‹ã¾ã‚‹ã€‚ä»Šæ—¥ã€æœ€åˆã®è¡Œå‹•ã‚’å§‹ã‚ã‚ˆã†ï¼",
        5:"å‹¢ã„ãŒã¤ã„ãŸï¼å°ã•ãªè¡Œå‹•ãŒæ¯Žæ—¥ã®åŠ›ã«å¤‰ã‚ã£ã¦ã„ã‚‹ã€‚",
        10:"ç¶™ç¶šã‚’è§£æ”¾ï¼è¡Œå‹•ãŒç¬¬äºŒã®æ€§æ ¼ã«ãªã‚Šã¤ã¤ã‚ã‚‹ã€‚",
        25:"æ­¢ã¾ã‚‰ãªã„åŠ›ï¼achievements ã®å …å›ºãªç ¦ã‚’ç¯‰ã„ãŸã€‚",
        50:"è¡Œå‹•ã®é”äººï¼å…ˆå»¶ã°ã—ã‚’å…‹æœã™ã‚‹ã“ã¨ãŒå½“ãŸã‚Šå‰ã«ãªã£ãŸã€‚",
        100:"ä¼èª¬ã®ã‚¹ãƒ†ãƒ¼ã‚¿ã‚¹ï¼100ãƒ¬ãƒ™ãƒ«åˆ†ã®ç´”ç²‹ãªçŒ®èº«ã¨è¦å¾‹ã€‚",
        200:"ç©¶æ¥µã®é ‚ç‚¹ï¼è‡ªåˆ†è‡ªèº«ã«æ‰“ã¡å‹ã¡ã€å®Ÿè¡Œã®æŠ€ã‚’æ¥µã‚ãŸã€‚ã¾ã•ã«ä¼èª¬ï¼"},
    ko:{0:"ëª¨ë“  ì—¬ì •ì€ í•œ ê±¸ìŒë¶€í„° ì‹œìž‘ë©ë‹ˆë‹¤. ì˜¤ëŠ˜ ì²« í–‰ë™ì„ ì‹œìž‘í•˜ì„¸ìš”!",
        5:"íƒ„ë ¥ì´ ë¶™ì—ˆì–´ìš”! ìž‘ì€ í–‰ë™ë“¤ì´ ë§¤ì¼ì˜ íž˜ìœ¼ë¡œ ë°”ë€Œê³  ìžˆìŠµë‹ˆë‹¤.",
        10:"ê¾¸ì¤€í•¨ í•´ì œ! í–‰ë™ì´ ë‹¹ì‹ ì˜ ì œ2ì˜ ë³¸ì„±ì´ ë˜ì–´ê°€ê³  ìžˆìŠµë‹ˆë‹¤.",
        25:"ë©ˆì¶œ ìˆ˜ ì—†ëŠ” íž˜! íƒ„íƒ„í•œ ì„±ì·¨ì˜ ìš”ìƒˆë¥¼ ìŒ“ì•˜ìŠµë‹ˆë‹¤.",
        50:"í–‰ë™ì˜ ë‹¬ì¸! ë¯¸ë£¨ëŠ” ìŠµê´€ì„ ì´ê¸°ëŠ” ê²ƒì´ ì´ì œ ê¸°ë³¸ê°’ì´ ë˜ì—ˆìŠµë‹ˆë‹¤.",
        100:"ì „ì„¤ì ì¸ ì§€ìœ„! 100ë‹¨ê³„ì˜ ìˆœìˆ˜í•œ í—Œì‹ ê³¼ ê·œìœ¨.",
        200:"ê¶ê·¹ì˜ ì •ì ! ìžì‹ ì„ ê·¹ë³µí•˜ê³  ì‹¤í–‰ì˜ ê¸°ìˆ ì„ ì™„ì„±í–ˆìŠµë‹ˆë‹¤. ê·¸ì•¼ë§ë¡œ ì „ì„¤ìž…ë‹ˆë‹¤!"},
    zh:{0:"æ¯æ®µæ—…ç¨‹éƒ½å§‹äºŽç¬¬ä¸€æ­¥ã€‚ä»Šå¤©å°±å¼€å§‹ä½ çš„ç¬¬ä¸€ä¸ªè¡ŒåŠ¨å§ï¼",
        5:"åŠ¿å¤´å·²èµ·ï¼ä½ æ­£åœ¨æŠŠå°å°çš„è¡ŒåŠ¨å˜æˆæ—¥å¸¸çš„åŠ›é‡ã€‚",
        10:"åšæŒå·²è§£é”ï¼è¡ŒåŠ¨æ­£åœ¨æˆä¸ºä½ çš„ç¬¬äºŒå¤©æ€§ã€‚",
        25:"åŠ¿ä¸å¯æŒ¡ï¼ä½ å·²å»ºèµ·ä¸€åº§åšå®žçš„æˆå°±å ¡åž’ã€‚",
        50:"è¡ŒåŠ¨å¤§å¸ˆï¼æˆ˜èƒœæ‹–å»¶å¦‚ä»Šå·²æ˜¯ä½ çš„å¸¸æ€ã€‚",
        100:"ä¼ å¥‡åœ°ä½ï¼100ä¸ªç­‰çº§ï¼Œçº¯ç²¹çš„ä¸“æ³¨ä¸Žè‡ªå¾‹ã€‚",
        200:"ç»ˆæžå·…å³°ï¼ä½ å·²å¾æœè‡ªå·±ï¼ŒæŽŒæ¡äº†è¡ŒåŠ¨çš„è‰ºæœ¯ã€‚ç»å¯¹ä¼ å¥‡ï¼"},
    ru:{0:"Ð›ÑŽÐ±Ð¾Ð¹ Ð¿ÑƒÑ‚ÑŒ Ð½Ð°Ñ‡Ð¸Ð½Ð°ÐµÑ‚ÑÑ Ñ Ð¾Ð´Ð½Ð¾Ð³Ð¾ ÑˆÐ°Ð³Ð°. ÐÐ°Ñ‡Ð½Ð¸Ñ‚Ðµ ÑÐ²Ð¾Ñ‘ Ð¿ÐµÑ€Ð²Ð¾Ðµ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ðµ ÑÐµÐ³Ð¾Ð´Ð½Ñ!",
        5:"Ð˜Ð¼Ð¿ÑƒÐ»ÑŒÑ Ð½Ð°Ð±Ñ€Ð°Ð½! ÐœÐ°Ð»ÐµÐ½ÑŒÐºÐ¸Ðµ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ Ð¿Ñ€ÐµÐ²Ñ€Ð°Ñ‰Ð°ÑŽÑ‚ÑÑ Ð² ÐµÐ¶ÐµÐ´Ð½ÐµÐ²Ð½ÑƒÑŽ ÑÐ¸Ð»Ñƒ.",
        10:"ÐŸÐ¾ÑÑ‚Ð¾ÑÐ½ÑÑ‚Ð²Ð¾ Ñ€Ð°Ð·Ð±Ð»Ð¾ÐºÐ¸Ñ€Ð¾Ð²Ð°Ð½Ð¾! Ð”ÐµÐ¹ÑÑ‚Ð²Ð¸Ðµ ÑÑ‚Ð°Ð½Ð¾Ð²Ð¸Ñ‚ÑÑ Ð²Ð°ÑˆÐµÐ¹ Ð²Ñ‚Ð¾Ñ€Ð¾Ð¹ Ð½Ð°Ñ‚ÑƒÑ€Ð¾Ð¹.",
        25:"ÐÐµÑƒÐ´ÐµÑ€Ð¶Ð¸Ð¼Ð°Ñ ÑÐ¸Ð»Ð°! Ð’Ñ‹ Ð¿Ð¾ÑÑ‚Ñ€Ð¾Ð¸Ð»Ð¸ ÐºÑ€ÐµÐ¿ÐºÑƒÑŽ ÐºÑ€ÐµÐ¿Ð¾ÑÑ‚ÑŒ Ð´Ð¾ÑÑ‚Ð¸Ð¶ÐµÐ½Ð¸Ð¹.",
        50:"ÐœÐ°ÑÑ‚ÐµÑ€ Ð”ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ! ÐŸÐ¾Ð±ÐµÐ¶Ð´Ð°Ñ‚ÑŒ Ð¿Ñ€Ð¾ÐºÑ€Ð°ÑÑ‚Ð¸Ð½Ð°Ñ†Ð¸ÑŽ â€” Ñ‚ÐµÐ¿ÐµÑ€ÑŒ Ð²Ð°ÑˆÐµ Ð¾Ð±Ñ‹Ñ‡Ð½Ð¾Ðµ ÑÐ¾ÑÑ‚Ð¾ÑÐ½Ð¸Ðµ.",
        100:"Ð›ÐµÐ³ÐµÐ½Ð´Ð°Ñ€Ð½Ñ‹Ð¹ ÑÑ‚Ð°Ñ‚ÑƒÑ! 100 ÑƒÑ€Ð¾Ð²Ð½ÐµÐ¹ Ñ‡Ð¸ÑÑ‚Ð¾Ð¹ ÑÐ°Ð¼Ð¾Ð¾Ñ‚Ð´Ð°Ñ‡Ð¸ Ð¸ Ð´Ð¸ÑÑ†Ð¸Ð¿Ð»Ð¸Ð½Ñ‹.",
        200:"ÐÐ±ÑÐ¾Ð»ÑŽÑ‚Ð½Ñ‹Ð¹ Ð¿Ð¸Ðº! Ð’Ñ‹ Ð¿Ð¾Ð±ÐµÐ´Ð¸Ð»Ð¸ ÑÐµÐ±Ñ Ð¸ Ð¾Ð²Ð»Ð°Ð´ÐµÐ»Ð¸ Ð¸ÑÐºÑƒÑÑÑ‚Ð²Ð¾Ð¼ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ. ÐŸÐ¾Ð¸ÑÑ‚Ð¸Ð½Ðµ Ð»ÐµÐ³ÐµÐ½Ð´Ð°Ñ€Ð½Ð¾!"},
    hi:{0:"à¤¹à¤° à¤¸à¤«à¤¼à¤° à¤à¤• à¤•à¤¦à¤® à¤¸à¥‡ à¤¶à¥à¤°à¥‚ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤†à¤œ à¤¹à¥€ à¤…à¤ªà¤¨à¥€ à¤ªà¤¹à¤²à¥€ à¤•à¤¾à¤°à¥à¤°à¤µà¤¾à¤ˆ à¤¶à¥à¤°à¥‚ à¤•à¤°à¥‡à¤‚!",
        5:"à¤—à¤¤à¤¿ à¤¬à¤¨ à¤—à¤ˆ! à¤†à¤ª à¤›à¥‹à¤Ÿà¥€ à¤•à¤¾à¤°à¥à¤°à¤µà¤¾à¤‡à¤¯à¥‹à¤‚ à¤•à¥‹ à¤°à¥‹à¤œà¤¼à¤¾à¤¨à¤¾ à¤•à¥€ à¤¤à¤¾à¤•à¤¤ à¤®à¥‡à¤‚ à¤¬à¤¦à¤² à¤°à¤¹à¥‡ à¤¹à¥ˆà¤‚à¥¤",
        10:"à¤¨à¤¿à¤°à¤‚à¤¤à¤°à¤¤à¤¾ à¤…à¤¨à¤²à¥‰à¤•! à¤•à¤¾à¤°à¥à¤°à¤µà¤¾à¤ˆ à¤…à¤¬ à¤†à¤ªà¤•à¥€ à¤¦à¥‚à¤¸à¤°à¥€ à¤ªà¥à¤°à¤•à¥ƒà¤¤à¤¿ à¤¬à¤¨à¤¤à¥€ à¤œà¤¾ à¤°à¤¹à¥€ à¤¹à¥ˆà¥¤",
        25:"à¤…à¤œà¥‡à¤¯ à¤¶à¤•à¥à¤¤à¤¿! à¤†à¤ªà¤¨à¥‡ à¤‰à¤ªà¤²à¤¬à¥à¤§à¤¿à¤¯à¥‹à¤‚ à¤•à¤¾ à¤à¤• à¤®à¤œà¤¼à¤¬à¥‚à¤¤ à¤•à¤¿à¤²à¤¾ à¤¬à¤¨à¤¾ à¤²à¤¿à¤¯à¤¾ à¤¹à¥ˆà¥¤",
        50:"à¤•à¤¾à¤°à¥à¤°à¤µà¤¾à¤ˆ à¤•à¥‡ à¤‰à¤¸à¥à¤¤à¤¾à¤¦! à¤Ÿà¤¾à¤²à¤®à¤Ÿà¥‹à¤² à¤ªà¤° à¤•à¤¾à¤¬à¥‚ à¤ªà¤¾à¤¨à¤¾ à¤…à¤¬ à¤†à¤ªà¤•à¥€ à¤†à¤¦à¤¤ à¤¬à¤¨ à¤—à¤ˆ à¤¹à¥ˆà¥¤",
        100:"à¤ªà¥Œà¤°à¤¾à¤£à¤¿à¤• à¤¦à¤°à¥à¤œà¤¾! à¤¶à¥à¤¦à¥à¤§ à¤¸à¤®à¤°à¥à¤ªà¤£ à¤”à¤° à¤…à¤¨à¥à¤¶à¤¾à¤¸à¤¨ à¤•à¥‡ 100 à¤¸à¥à¤¤à¤°à¥¤",
        200:"à¤ªà¤°à¤® à¤¶à¤¿à¤–à¤°! à¤†à¤ªà¤¨à¥‡ à¤–à¥à¤¦ à¤ªà¤° à¤µà¤¿à¤œà¤¯ à¤ªà¤¾à¤ˆ à¤”à¤° à¤•à¤°à¤¨à¥‡ à¤•à¥€ à¤•à¤²à¤¾ à¤®à¥‡à¤‚ à¤®à¤¹à¤¾à¤°à¤¤ à¤¹à¤¾à¤¸à¤¿à¤² à¤•à¥€à¥¤ à¤ªà¥‚à¤°à¥€ à¤¤à¤°à¤¹ à¤¸à¥‡ à¤ªà¥Œà¤°à¤¾à¤£à¤¿à¤•!"},
    id:{0:"Setiap perjalanan dimulai dengan satu langkah. Mulai tindakan pertamamu hari ini!",
        5:"Momentum terbangun! Kamu mengubah tindakan kecil menjadi kekuatan harian.",
        10:"Konsistensi terbuka! Tindakan mulai menjadi kebiasaan keduamu.",
        25:"Kekuatan tak terhentikan! Kamu telah membangun benteng pencapaian yang kokoh.",
        50:"Master Aksi! Mengatasi penundaan kini menjadi kebiasaan defaultmu.",
        100:"Status Legendaris! 100 level dedikasi dan disiplin murni.",
        200:"Puncak Tertinggi! Kamu telah menaklukkan dirimu sendiri dan menguasai seni bertindak. Benar-benar legendaris!"}
  };

  var CMD_LIST = ["list","export","import","undo","redo","theme","clear","help"];
  var CMD_ARGS = { add:"<task>", del:"<task>", list:"", export:"", import:"", undo:"", redo:"", theme:"", clear:"", help:"" };
  var CMD_SLASH = { add:"/add", del:"/del", list:"/list", export:"/export", import:"/import", undo:"/undo", redo:"/redo", theme:"/theme", clear:"/clear", help:"/help" };

  var currentLang = "en";

  function t(key, vars){
    var dict = STRINGS[currentLang] || STRINGS.en;
    var str = dict[key];
    if(str === undefined) str = (STRINGS.en[key] !== undefined ? STRINGS.en[key] : key);
    if(vars){ Object.keys(vars).forEach(function(k){ str = str.split("{"+k+"}").join(vars[k]); }); }
    return str;
  }

  function slogan(level){
    var s = SLOGANS[currentLang] || SLOGANS.en;
    return s[level] !== undefined ? s[level] : SLOGANS.en[level];
  }

  /* =========================================================
     Constants
  ========================================================= */

  var STORAGE_KEY    = "acta_data_v3";
  var STORAGE_KEY_V2 = "acta_data_v2";
  var SETTINGS_KEY   = "acta_settings_v2";
  var MILESTONE_KEY  = "acta_milestones_v1";
  var MILESTONES     = [0,5,10,25,50,100,200];

  /* =========================================================
     Firebase (cloud sync) â€” degrades gracefully if unavailable
  ========================================================= */

  var FIREBASE_CONFIG = {
    apiKey: "AIzaSyCABdfISVITfp-vATRQraq705kxEUM8m54",
    authDomain: "acta-2b937.firebaseapp.com",
    projectId: "acta-2b937",
    storageBucket: "acta-2b937.firebasestorage.app",
    messagingSenderId: "438646299026",
    appId: "1:438646299026:web:490aba5a54ce6f892c094b",
    measurementId: "G-CCH6G74K3Y"
  };
  var fbReady = false, fbAuth = null, fbDb = null, fbUser = null, syncLinked = false;
  try{
    if(typeof firebase !== "undefined"){
      firebase.initializeApp(FIREBASE_CONFIG);
      fbAuth = firebase.auth();
      fbDb = firebase.firestore();
      fbReady = true;
    }
  }catch(e){ fbReady = false; }

  /* =========================================================
     State
  ========================================================= */

  var state = loadState();
  var settings = loadSettings();
  var milestoneState = loadMilestoneState();
  currentLang = settings.lang || "en";

  var undoSnapshot = null;
  var redoSnapshot = null;
  var prevStreak = -1;
  var lastKnownLevel = null;

  function defaultProfile(){ return { name:"", bio:"", country:"", avatar:null }; }

  function loadState(){
    try{
      var raw = localStorage.getItem(STORAGE_KEY);
      if(raw){
        var p = JSON.parse(raw);
        return { total_ap:p.total_ap||0, tasks:p.tasks||{}, history:p.history||[], todos:p.todos||[], profile:p.profile||defaultProfile(), maxStreak:p.maxStreak||0 };
      }
      var old = localStorage.getItem(STORAGE_KEY_V2);
      if(old){
        var o = JSON.parse(old);
        var tasks = {};
        Object.keys(o.tasks||{}).forEach(function(k){
          tasks[k] = { name:k, count:o.tasks[k].count||0, last_done:o.tasks[k].last_done||Date.now() };
        });
        var history = (o.history||[]).map(function(h){ return { ts:h.ts, task:h.task, ap:h.sp||1 }; });
        return { total_ap:o.total_sp||0, tasks:tasks, history:history, todos:[], profile:defaultProfile(), maxStreak:0 };
      }
    }catch(e){}
    return { total_ap:0, tasks:{}, history:[], todos:[], profile:defaultProfile(), maxStreak:0 };
  }

  function emptyData(){
    return { total_ap:0, tasks:{}, history:[], todos:[], profile:defaultProfile(), maxStreak:0 };
  }

  function saveState(){
    if(fbUser) return; // signed in: cloud is the active store, guest/local bucket stays untouched
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
    catch(e){ pushEntry("Could not save data (localStorage error).", "âœ•"); }
  }

  function loadSettings(){
    try{
      var raw = localStorage.getItem(SETTINGS_KEY);
      if(raw){
        var p = JSON.parse(raw);
        return { sound:p.sound!==false, vibration:p.vibration!==false, volume:(typeof p.volume==="number"?p.volume:50), lang:p.lang||"en" };
      }
    }catch(e){}
    return { sound:true, vibration:true, volume:50, lang:"en" };
  }
  function saveSettings(){ try{ localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); }catch(e){} }

  function loadMilestoneState(){
    try{
      var raw = localStorage.getItem(MILESTONE_KEY);
      if(raw) return JSON.parse(raw);
    }catch(e){}
    return { maxLevel:0, level0Shown:false };
  }
  function saveMilestoneState(){ try{ localStorage.setItem(MILESTONE_KEY, JSON.stringify(milestoneState)); }catch(e){} }

  function cloneData(){
    return JSON.parse(JSON.stringify({ total_ap:state.total_ap, tasks:state.tasks, history:state.history, todos:state.todos, profile:state.profile, maxStreak:state.maxStreak }));
  }
  function pushUndo(){
    undoSnapshot = cloneData();
    redoSnapshot = null;
  }
  function applyData(data){
    data = data || {};
    state.total_ap = data.total_ap || 0;
    state.tasks = data.tasks || {};
    state.history = data.history || [];
    state.todos = data.todos || [];
    state.profile = data.profile || defaultProfile();
    state.maxStreak = data.maxStreak || 0;
  }

  function mergeData(imported){
    imported = imported || {};
    var impTasks = imported.tasks || {};
    var impHistory = imported.history || [];
    var impTodos = imported.todos || [];

    Object.keys(impTasks).forEach(function(key){
      var it = impTasks[key];
      var existing = state.tasks[key];
      var itAp = it.total_ap !== undefined ? it.total_ap : (it.count||0);
      if(existing){
        existing.count += (it.count||0);
        existing.total_ap = (existing.total_ap||0) + itAp;
        existing.last_done = Math.max(existing.last_done||0, it.last_done||0);
        if(!existing.name) existing.name = it.name || key;
      }else{
        state.tasks[key] = { name: it.name || key, count: it.count||0, total_ap: itAp, last_done: it.last_done || Date.now() };
      }
    });

    state.history = state.history.concat(impHistory).sort(function(a,b){ return a.ts - b.ts; });

    var apToAdd = impHistory.length
      ? impHistory.reduce(function(s,h){ return s + (h.ap||0); }, 0)
      : (imported.total_ap || 0);
    state.total_ap += apToAdd;

    var existingIds = {};
    state.todos.forEach(function(td){ existingIds[td.id] = true; });
    impTodos.forEach(function(td){
      var copy = { id: existingIds[td.id] ? uid() : td.id, text: td.text, done: !!td.done, completedAt: td.completedAt || null };
      existingIds[copy.id] = true;
      state.todos.push(copy);
    });

    if((imported.maxStreak||0) > (state.maxStreak||0)) state.maxStreak = imported.maxStreak;
    if(imported.profile){
      if(!state.profile.name && imported.profile.name) state.profile.name = imported.profile.name;
      if(!state.profile.bio && imported.profile.bio) state.profile.bio = imported.profile.bio;
      if(!state.profile.country && imported.profile.country) state.profile.country = imported.profile.country;
      if(!state.profile.avatar && imported.profile.avatar) state.profile.avatar = imported.profile.avatar;
    }
  }

  /* =========================================================
     DOM refs
  ========================================================= */

  var feedEl       = document.getElementById("feed");
  var cmdEl        = document.getElementById("cmd");
  var suggestEl    = document.getElementById("suggest");
  var totalApEl    = document.getElementById("totalAp");
  var levelValueEl = document.getElementById("levelValue");
  var levelBarFill = document.getElementById("levelBarFill");
  var overlayEl    = document.getElementById("overlay");
  var undoBtn      = document.getElementById("undoBtn");
  var redoBtn      = document.getElementById("redoBtn");
  var statsBtn     = document.getElementById("statsBtn");
  var todoBtn      = document.getElementById("todoBtn");
  var todoBadge    = document.getElementById("todoBadge");
  var importBtn    = document.getElementById("importBtn");
  var importFile   = document.getElementById("importFile");
  var exportBtn    = document.getElementById("exportBtn");
  var soundBtn     = document.getElementById("soundBtn");
  var soundPop     = document.getElementById("soundPop");
  var soundSwitch  = document.getElementById("soundSwitch");
  var vibSwitch    = document.getElementById("vibSwitch");
  var volSlider    = document.getElementById("volSlider");
  var themeToggle  = document.getElementById("themeToggle");
  var modalCloseX  = document.getElementById("modalCloseX");
  var flameIconsEl = document.getElementById("flameIcons");
  var streakNumEl  = document.getElementById("streakNum");
  var pipsEl       = document.getElementById("pips");
  var avatarBtn    = document.getElementById("avatarBtn");
  var drawerScrim  = document.getElementById("drawerScrim");
  var todoDrawer   = document.getElementById("todoDrawer");
  var userDrawer   = document.getElementById("userDrawer");
  var profileAvatarImg = document.getElementById("profileAvatarImg");
  var profileAvatarFallback = document.getElementById("profileAvatarFallback");
  var avatarFileInput = document.getElementById("avatarFileInput");
  var avatarWrap = document.getElementById("avatarWrap");
  var profileNameInput = document.getElementById("profileNameInput");
  var profileLevelText = document.getElementById("profileLevelText");
  var profileApText = document.getElementById("profileApText");
  var firstRunOverlay = document.getElementById("firstRunOverlay");
  var publicProfilePage = document.getElementById("publicProfilePage");
  var todoAddInput = document.getElementById("todoAddInput");
  var todoAddBtn   = document.getElementById("todoAddBtn");
  var todoListEl   = document.getElementById("todoList");
  var milestoneOverlay = document.getElementById("milestoneOverlay");
  var milestoneSlogan  = document.getElementById("milestoneSlogan");
  var milestoneLevelNum= document.getElementById("milestoneLevelNum");
  var milestoneCloseBtn= document.getElementById("milestoneClose");
  var toastHost    = document.getElementById("toastHost");
  var confirmOverlay  = document.getElementById("confirmOverlay");
  var confirmMessage  = document.getElementById("confirmMessage");
  var confirmCancelBtn= document.getElementById("confirmCancelBtn");
  var confirmOkBtn    = document.getElementById("confirmOkBtn");

  var cmdHistory = [];
  var cmdHistoryIdx = -1;
  var suggestActive = -1;
  var suggestItems = [];

  /* =========================================================
     Utilities
  ========================================================= */

  function pad(n){ return String(n).padStart(2,"0"); }
  function dateKey(ts){ var d=new Date(ts); return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate()); }
  function timeKey(ts){ var d=new Date(ts); return pad(d.getHours())+":"+pad(d.getMinutes()); }
  function escapeHtml(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  function normalizeTaskName(name){ return name.trim().toLowerCase().replace(/\s+/g," "); }
  function uid(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,7); }

  var CHART_COLORS = ["#5b8def","#e07a5f","#3d9970","#f2c14e","#bb86fc","#ff6b81","#2ec4b6","#e9724c","#9b8cf2","#4fc1e9"];
  function colorForName(name){
    var h = 0;
    for(var i=0;i<name.length;i++){ h = (h*31 + name.charCodeAt(i)) >>> 0; }
    return CHART_COLORS[h % CHART_COLORS.length];
  }
  function shadeFor(i, total, name){
    if(name) return colorForName(name);
    return CHART_COLORS[i % CHART_COLORS.length];
  }

  /* =========================================================
     Level math:  totalApForLevel(N) = 10 * N^1.5
  ========================================================= */

  function totalApForLevel(n){ return Math.round(10 * Math.pow(n, 1.5)); }
  function levelFromAp(ap){
    var lvl = 0;
    while(totalApForLevel(lvl+1) <= ap && lvl < 5000){ lvl++; }
    return lvl;
  }
  function levelProgress(ap){
    var lvl = levelFromAp(ap);
    var cur = totalApForLevel(lvl);
    var next = totalApForLevel(lvl+1);
    var span = next - cur;
    var progress = span > 0 ? (ap - cur) / span : 1;
    return { level:lvl, progress:Math.max(0, Math.min(1, progress)) };
  }

  /* =========================================================
     Sound + haptics
  ========================================================= */

  var audioCtx = null;
  function ensureAudio(){
    if(!audioCtx){ try{ audioCtx = new (window.AudioContext||window.webkitAudioContext)(); }catch(e){ audioCtx=null; } }
    if(audioCtx && audioCtx.state === "suspended") audioCtx.resume();
  }
  function tone(freq, dur, type, gainMul){
    if(!settings.sound) return;
    ensureAudio();
    if(!audioCtx) return;
    var t0 = audioCtx.currentTime;
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    osc.type = type || "sine";
    osc.frequency.setValueAtTime(freq, t0);
    var peak = (settings.volume/100) * (gainMul||0.2);
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(Math.max(peak,0.0001), t0+0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0+dur);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start(t0); osc.stop(t0+dur+0.02);
  }
  function buzz(pattern){
    if(!settings.vibration) return;
    if(navigator.vibrate){ try{ navigator.vibrate(pattern); }catch(e){} }
  }

  var SFX = {
    success:  function(){ tone(660,0.12,"sine",0.22); buzz(12); },
    newTask:  function(){ tone(523,0.1,"triangle",0.2); setTimeout(function(){ tone(784,0.16,"triangle",0.22); },90); buzz([10,30,10]); },
    error:    function(){ tone(160,0.22,"square",0.15); buzz([20,40,20]); },
    remove:   function(){ tone(392,0.14,"sawtooth",0.15); setTimeout(function(){ tone(262,0.16,"sawtooth",0.15); },70); buzz(15); },
    undo:     function(){ tone(300,0.09,"sine",0.15); buzz(8); },
    redo:     function(){ tone(420,0.09,"sine",0.15); buzz(8); },
    click:    function(){ tone(700,0.05,"sine",0.1); buzz(6); },
    openPane: function(){ tone(440,0.07,"sine",0.15); setTimeout(function(){ tone(660,0.09,"sine",0.15); },60); },
    toggle:   function(){ tone(520,0.06,"triangle",0.15); buzz(8); },
    streak:   function(){ tone(523,0.1,"triangle",0.2); setTimeout(function(){ tone(659,0.1,"triangle",0.2); },100); setTimeout(function(){ tone(880,0.16,"triangle",0.22); },200); buzz([10,20,10,20,20]); },
    todoEasy: function(){ tone(600,0.1,"sine",0.2); buzz(10); },
    todoNormal:function(){ tone(600,0.1,"sine",0.2); setTimeout(function(){ tone(760,0.12,"sine",0.2); },80); buzz([10,15,10]); },
    todoHard: function(){ tone(600,0.1,"sine",0.2); setTimeout(function(){ tone(760,0.1,"sine",0.2); },70); setTimeout(function(){ tone(920,0.16,"sine",0.22); },150); buzz([10,15,10,15,10]); },
    levelUp:  function(){ tone(440,0.1,"triangle",0.2); setTimeout(function(){ tone(660,0.14,"triangle",0.22); },90); buzz([15,25,15]); },
    milestone:function(){ tone(392,0.12,"triangle",0.22); setTimeout(function(){ tone(523,0.12,"triangle",0.22); },110); setTimeout(function(){ tone(659,0.14,"triangle",0.22); },220); setTimeout(function(){ tone(880,0.22,"triangle",0.25); },340); buzz([15,25,15,25,15,25,30]); },
    drawer:   function(){ tone(500,0.06,"sine",0.12); },
    lang:     function(){ tone(560,0.07,"sine",0.15); setTimeout(function(){ tone(700,0.08,"sine",0.15); },70); }
  };

  /* =========================================================
     Feed rendering
  ========================================================= */

  function pushEntry(text, sym, dim){
    var row = document.createElement("div");
    row.className = "entry" + (dim ? " dim" : "");
    var s = document.createElement("span"); s.className = "sym"; s.textContent = sym || "Â·";
    var tx = document.createElement("span"); tx.className = "txt"; tx.innerHTML = escapeHtml(text);
    var meta = document.createElement("span"); meta.className = "meta"; meta.textContent = timeKey(Date.now());
    row.appendChild(s); row.appendChild(tx); row.appendChild(meta);
    feedEl.appendChild(row);
    feedEl.scrollTop = feedEl.scrollHeight;
  }
  function pushEcho(raw){
    var row = document.createElement("div");
    row.className = "entry dim";
    var s = document.createElement("span"); s.className="sym"; s.textContent="â€º";
    var tx = document.createElement("span"); tx.className="txt"; tx.textContent = raw;
    row.appendChild(s); row.appendChild(tx);
    feedEl.appendChild(row);
    feedEl.scrollTop = feedEl.scrollHeight;
  }

  function refreshTotals(){
    totalApEl.textContent = state.total_ap;
    var info = levelProgress(state.total_ap);
    levelValueEl.textContent = info.level;
    levelBarFill.style.width = (info.progress*100).toFixed(1)+"%";
  }

  function flashLevelBar(){
    levelBarFill.classList.remove("flash");
    void levelBarFill.offsetWidth;
    levelBarFill.classList.add("flash");
  }

  function showToast(text){
    var el = document.createElement("div");
    el.className = "toast";
    el.textContent = text;
    toastHost.appendChild(el);
    setTimeout(function(){ el.remove(); }, 2600);
  }

  function floatApGain(amount, x, y){
    var el = document.createElement("div");
    el.className = "float-ap";
    el.textContent = "+"+amount+" "+t("ap");
    el.style.left = (x||window.innerWidth/2)+"px";
    el.style.top = (y||window.innerHeight/2)+"px";
    document.body.appendChild(el);
    setTimeout(function(){ el.remove(); }, 950);
  }

  /* =========================================================
     Streak
  ========================================================= */

  function computeStreakInfo(){
    var daysSet = {};
    state.history.forEach(function(h){ daysSet[dateKey(h.ts)] = true; });
    var todayKey = dateKey(Date.now());
    var todayActive = !!daysSet[todayKey];
    var cursor = new Date();
    if(!todayActive) cursor.setDate(cursor.getDate()-1);
    var streak = 0;
    while(true){
      var key = cursor.getFullYear()+"-"+pad(cursor.getMonth()+1)+"-"+pad(cursor.getDate());
      if(daysSet[key]){ streak++; cursor.setDate(cursor.getDate()-1); } else break;
    }
    var todayCount = state.history.filter(function(h){ return dateKey(h.ts) === todayKey; }).length;
    return { streak:streak, todayActive:todayActive, todayCount:todayCount };
  }

  function flameTierFor(streak){
    if(streak >= 30) return 3;
    if(streak >= 7) return 2;
    if(streak >= 1) return 1;
    return 1;
  }

  function renderStreak(){
    var info = computeStreakInfo();
    if(info.streak > (state.maxStreak||0)){
      state.maxStreak = info.streak;
      saveState();
      scheduleCloudSave();
    }
    streakNumEl.textContent = info.streak;
    document.getElementById("todayCountNum").textContent = info.todayCount;
    var tier = flameTierFor(info.streak);
    var lit = info.todayActive && info.streak > 0;
    var html = "";
    for(var i=0;i<tier;i++){ html += "<span class='flame"+(lit?" lit":"")+"' data-i='"+i+"'>ðŸ”¥</span>"; }
    flameIconsEl.innerHTML = html;
    if(prevStreak >= 0 && info.streak > prevStreak){
      var flames = flameIconsEl.querySelectorAll(".flame");
      flames.forEach(function(f){ f.classList.remove("flare"); void f.offsetWidth; f.classList.add("flare"); });
      if(info.streak > 0 && info.streak % 7 === 0) SFX.streak();
      setTimeout(function(){ flames.forEach(function(f){ f.classList.remove("flare"); }); }, 650);
    }
    prevStreak = info.streak;
  }

  /* =========================================================
     Milestones / level-up
  ========================================================= */

  function checkLevelEvents(){
    var newLevel = levelProgress(state.total_ap).level;
    if(lastKnownLevel === null){ lastKnownLevel = newLevel; return; }
    if(newLevel > lastKnownLevel){
      flashLevelBar();
      showToast(t("levelUp", { level:newLevel }));
      SFX.levelUp();
      var crossed = -1;
      MILESTONES.forEach(function(m){ if(m>0 && m > milestoneState.maxLevel && m <= newLevel) crossed = m; });
      if(crossed >= 0){
        milestoneState.maxLevel = newLevel;
        saveMilestoneState();
        setTimeout(function(){ openMilestone(crossed); }, 450);
      }
    }
    lastKnownLevel = newLevel;
  }

  function maybeShowLevelZero(){
    if(!milestoneState.level0Shown){
      milestoneState.level0Shown = true;
      saveMilestoneState();
      setTimeout(function(){ openMilestone(0); }, 300);
    }
  }

  function openMilestone(level){
    document.getElementById("milestoneLevelPrefix").textContent = t("level");
    milestoneLevelNum.textContent = level;
    milestoneSlogan.textContent = slogan(level);
    milestoneCloseBtn.textContent = t("nicedBtn");
    milestoneOverlay.classList.add("open");
    if(level > 0) SFX.milestone();
  }
  function closeMilestone(){ milestoneOverlay.classList.remove("open"); }

  /* =========================================================
     Undo / redo
  ========================================================= */

  function refreshUndoRedoButtons(){
    undoBtn.disabled = undoSnapshot === null;
    redoBtn.disabled = redoSnapshot === null;
  }
  function refreshAllUI(){
    refreshTotals();
    renderStreak();
    refreshUndoRedoButtons();
    refreshTodoBadge();
    checkLevelEvents();
    if(overlayEl.classList.contains("open")) renderActiveTab();
    if(todoDrawer.classList.contains("open")) renderTodoList();
  }

  function afterMutation(){
    refreshAllUI();
    saveState();
    scheduleCloudSave();
  }

  /* =========================================================
     Core action logging
  ========================================================= */

  function logAction(taskName, apAmount, skipTodoSync, explicitKey){
    var wasEmpty = state.history.length === 0;
    var key = explicitKey;
    var pendingTodo = null;
    if(!key){
      pendingTodo = state.todos.find(function(td){ return !td.done && normalizeTaskName(parseTodoTask(td.text)) === taskName; });
      if(pendingTodo){
        if(!pendingTodo.key) pendingTodo.key = uid();
        key = pendingTodo.key;
      }else{
        key = taskName + "_" + uid();
      }
    }
    var existing = state.tasks[key];
    var isNew = !existing;
    if(existing){
      existing.count += 1;
      existing.total_ap = (existing.total_ap||0) + apAmount;
      existing.last_done = Date.now();
    }else{
      state.tasks[key] = { name:taskName, count:1, total_ap:apAmount, last_done:Date.now() };
    }
    state.total_ap += apAmount;
    state.history.push({ ts:Date.now(), task:taskName, ap:apAmount, key:key });
    if(!skipTodoSync && !pendingTodo){
      state.todos.push({ id:uid(), text:taskName, done:false, completedAt:null, key:key });
    }
    if(wasEmpty) maybeShowLevelZero();
    return isNew;
  }

  /* =========================================================
     Commands
  ========================================================= */

  function cmdAdd(args){
    if(args.length === 0){ pushEntry(t("addUsage"), "âœ•"); SFX.error(); return; }
    var taskName = normalizeTaskName(args.join(" "));
    if(!taskName){ pushEntry(t("addInvalid"), "âœ•"); SFX.error(); return; }
    pushUndo();
    var isNew = logAction(taskName, 1);
    afterMutation();
    if(isNew){
      pushEntry(t("addNew", { task:taskName }), "â˜…");
      SFX.newTask();
    }else{
      pushEntry(t("addExisting", { task:taskName, count:state.tasks[taskName].count }), "âœ“");
      SFX.success();
    }
  }

  function cmdDel(args){
    if(args.length === 0){ pushEntry(t("delUsage"), "âœ•"); SFX.error(); return; }
    var taskName = normalizeTaskName(args.join(" "));
    if(state.tasks[taskName]){
      pushUndo();
      delete state.tasks[taskName];
      afterMutation();
      pushEntry(t("delOk", { task:taskName }), "â€“", true);
      SFX.remove();
    }else{
      pushEntry(t("delNotFound", { task:taskName }), "âœ•");
      SFX.error();
    }
  }

  function cmdClear(){
    feedEl.innerHTML = "";
    pushEntry(t("clearedMsg"), "Â·", true);
    SFX.click();
  }

  var SHORTCUTS = [
    { keys:"Ctrl/âŒ˜ + K or /", labelKey:"scFocus" },
    { keys:"Esc", labelKey:"scEsc" },
    { keys:"Ctrl/âŒ˜ + Z", labelKey:"scUndo" },
    { keys:"Ctrl/âŒ˜ + Y", labelKey:"scRedo" },
    { keys:"Ctrl/âŒ˜ + E", labelKey:"scExport" },
    { keys:"Ctrl/âŒ˜ + O", labelKey:"scImport" },
    { keys:"Ctrl/âŒ˜ + Shift + S", labelKey:"scStats" },
    { keys:"Ctrl/âŒ˜ + Shift + L", labelKey:"scTheme" }
  ];

  function cmdHelp(){
    pushEntry(t("helpHeader"), "Â·", true);
    CMD_LIST.forEach(function(key){
      var line = CMD_SLASH[key] + (CMD_ARGS[key] ? " "+CMD_ARGS[key] : "") + "  " + t("cmd"+key.charAt(0).toUpperCase()+key.slice(1));
      pushEntry(line, "Â·", true);
    });
    pushEntry(t("shortcutsHeader"), "Â·", true);
    SHORTCUTS.forEach(function(s){
      pushEntry(s.keys + "  " + t(s.labelKey), "Â·", true);
    });
  }

  function doExport(){
    var payload = { total_ap: state.total_ap, tasks: state.tasks, history: state.history, todos: state.todos, profile: state.profile, maxStreak: state.maxStreak, settings: settings, exported_at: Date.now() };
    var blob = new Blob([JSON.stringify(payload,null,2)], { type:"application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = "acta-backup.json";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    pushEntry(t("exportedMsg"), "Â·", true);
    SFX.click();
  }

  function doExportPdf(){
    if(typeof window.jspdf === "undefined"){
      pushEntry(t("pdfUnavailable"), "âœ•");
      SFX.error();
      return;
    }
    var jsPDFCtor = window.jspdf.jsPDF;
    var doc = new jsPDFCtor({ unit:"pt", format:"a4" });
    var pageW = doc.internal.pageSize.getWidth();
    var pageH = doc.internal.pageSize.getHeight();
    var margin = 44;
    var y = 56;

    var who = (fbUser && (fbUser.email || fbUser.displayName)) || state.profile.name || "Guest";
    var now = new Date();
    var info = levelProgress(state.total_ap);

    doc.setFont("helvetica","bold"); doc.setFontSize(20); doc.setTextColor(20,20,20);
    doc.text("ACTA â€” Export Report", margin, y); y += 20;
    doc.setFont("helvetica","normal"); doc.setFontSize(10); doc.setTextColor(120,120,120);
    doc.text(who + "   Â·   " + now.toLocaleDateString() + " " + now.toLocaleTimeString(), margin, y); y += 22;

    doc.setDrawColor(225,225,225); doc.line(margin, y, pageW-margin, y); y += 26;

    var stats = [
      [String(info.level), "Level"],
      [String(state.total_ap), "Total AP"],
      [String(state.maxStreak||0), "Max streak"],
      [String(state.history.length), "Actions logged"]
    ];
    var colW = (pageW - margin*2) / stats.length;
    stats.forEach(function(s,i){
      var x = margin + i*colW;
      doc.setFont("helvetica","bold"); doc.setFontSize(17); doc.setTextColor(20,20,20);
      doc.text(s[0], x, y);
      doc.setFont("helvetica","normal"); doc.setFontSize(8.5); doc.setTextColor(140,140,140);
      doc.text(s[1], x, y+14);
    });
    y += 38;
    doc.setDrawColor(225,225,225); doc.line(margin, y, pageW-margin, y); y += 26;

    var byName = {};
    Object.keys(state.tasks).forEach(function(key){
      var tk = state.tasks[key];
      var nm = tk.name || key;
      byName[nm] = (byName[nm]||0) + tk.count;
    });
    var names = Object.keys(byName).sort(function(a,b){ return byName[b]-byName[a]; });

    var col1 = margin, col2 = margin+40, col3 = pageW-margin-60;
    doc.setFont("helvetica","bold"); doc.setFontSize(10.5); doc.setTextColor(20,20,20);
    doc.text("#", col1, y);
    doc.text("Task", col2, y);
    doc.text("Frequency", col3, y);
    y += 8;
    doc.setDrawColor(200,200,200); doc.line(margin, y, pageW-margin, y); y += 18;

    doc.setFont("helvetica","normal");
    names.forEach(function(n,i){
      if(y > pageH-50){ doc.addPage(); y = 56; }
      doc.setFontSize(10); doc.setTextColor(40,40,40);
      doc.text(String(i+1), col1, y);
      var label = n.length>68 ? n.slice(0,68)+"â€¦" : n;
      doc.text(label, col2, y);
      doc.text(String(byName[n]), col3, y);
      y += 20;
    });

    if(names.length === 0){
      doc.setFont("helvetica","normal"); doc.setFontSize(11); doc.setTextColor(140,140,140);
      doc.text(t("overviewEmpty"), col1, y);
    }

    doc.save("acta-report.pdf");
    pushEntry(t("exportedMsg"), "Â·", true);
    SFX.click();
  }

  function doImportFile(file){
    var reader = new FileReader();
    reader.onload = function(){
      try{
        var data = JSON.parse(reader.result);
        pushUndo();
        mergeData(data);
        afterMutation();
        pushEntry(t("importedMsg", { file:file.name }), "Â·", true);
        SFX.newTask();
      }catch(e){
        pushEntry(t("importFailed"), "âœ•");
        SFX.error();
      }
    };
    reader.onerror = function(){ pushEntry(t("importReadFail"), "âœ•"); SFX.error(); };
    reader.readAsText(file);
  }

  function doUndo(){
    if(undoSnapshot === null) return;
    redoSnapshot = cloneData();
    var prev = undoSnapshot;
    undoSnapshot = null;
    applyData(prev);
    afterMutation();
    pushEntry(t("undidMsg"), "â†º", true);
    SFX.undo();
  }
  function doRedo(){
    if(redoSnapshot === null) return;
    undoSnapshot = cloneData();
    var next = redoSnapshot;
    redoSnapshot = null;
    applyData(next);
    afterMutation();
    pushEntry(t("redidMsg"), "â†»", true);
    SFX.redo();
  }

  var confirmCallback = null;
  var confirmCancelCallback = null;
  function showConfirm(message, onConfirm, opts){
    opts = opts || {};
    confirmMessage.textContent = message;
    confirmCancelBtn.textContent = opts.cancelLabel || t("cancelBtn");
    confirmOkBtn.textContent = opts.okLabel || t("confirmBtn");
    confirmCallback = onConfirm;
    confirmCancelCallback = opts.onCancel || null;
    confirmOverlay.classList.add("open");
  }
  function closeConfirm(){ confirmOverlay.classList.remove("open"); confirmCallback = null; confirmCancelCallback = null; }
  confirmCancelBtn.addEventListener("click", function(){
    var cb = confirmCancelCallback;
    closeConfirm();
    if(cb) cb();
  });
  confirmOverlay.addEventListener("click", function(e){ if(e.target===confirmOverlay) closeConfirm(); });
  confirmOkBtn.addEventListener("click", function(){
    var cb = confirmCallback;
    closeConfirm();
    if(cb) cb();
  });

  function eraseAllData(){
    state.total_ap = 0; state.tasks = {}; state.history = []; state.todos = [];
    state.profile = defaultProfile(); state.maxStreak = 0;
    undoSnapshot = null; redoSnapshot = null;
    milestoneState = { maxLevel:0, level0Shown:false };
    saveMilestoneState();
    saveState();
    scheduleCloudSave();
    refreshAllUI();
    lastKnownLevel = 0;
    feedEl.innerHTML = "";
    pushEntry(t("erasedMsg"), "Â·", true);
    closeDrawer(userDrawer);
    SFX.remove();
  }

  /* =========================================================
     Cloud sync (Firebase)
  ========================================================= */

  var cloudSaveTimer = null;
  function levelOf(){ return levelProgress(state.total_ap).level; }

  function scheduleCloudSave(){
    if(!fbReady || !fbUser || !fbDb) return;
    clearTimeout(cloudSaveTimer);
    cloudSaveTimer = setTimeout(function(){
      fbDb.collection("actaUsers").doc(fbUser.uid).set({
        total_ap: state.total_ap, tasks: state.tasks, history: state.history, todos: state.todos,
        profile: state.profile, maxStreak: state.maxStreak, updated_at: Date.now()
      }).catch(function(){});
      var card = buildCardData();
      fbDb.collection("publicProfiles").doc(fbUser.uid).set({
        name: card.name, bio: state.profile.bio || "", country: card.country, avatar: card.avatar,
        level: card.level, total_ap: card.total_ap, maxStreak: card.maxStreak,
        topTasks: card.topTasks, heatmap: card.heatmap, tasksDone: state.history.length, updated_at: Date.now()
      }).catch(function(){});
    }, 1500);
  }

  var wasSignedIn = false;

  function resolveCloudSync(){
    if(!fbReady || !fbUser || !fbDb) return;
    try{ localStorage.removeItem(STORAGE_KEY); }catch(e){}
    fbDb.collection("actaUsers").doc(fbUser.uid).get().then(function(snap){
      applyData(snap.exists ? snap.data() : emptyData());
      syncLinked = true;
      refreshAllUI();
      if(!snap.exists) scheduleCloudSave();
    }).catch(function(err){ showSyncNote(err.message || t("syncUnavailable")); });
  }

  function showSyncNote(msg){
    var note = document.getElementById("syncNote");
    if(note){ note.textContent = msg; note.classList.add("show"); }
  }

  function fbSignInGoogle(){
    if(!fbReady){ showSyncNote(t("syncUnavailable")); return; }
    var provider = new firebase.auth.GoogleAuthProvider();
    fbAuth.signInWithPopup(provider).catch(function(err){ showSyncNote(err.message || t("syncUnavailable")); });
  }
  function fbSignInEmail(email, pass){
    if(!fbReady){ showSyncNote(t("syncUnavailable")); return; }
    fbAuth.signInWithEmailAndPassword(email, pass).catch(function(err){
      if(err.code === "auth/user-not-found" || err.code === "auth/invalid-credential"){
        fbAuth.createUserWithEmailAndPassword(email, pass).catch(function(err2){ showSyncNote(err2.message || t("syncUnavailable")); });
      }else{
        showSyncNote(err.message || t("syncUnavailable"));
      }
    });
  }
  function fbSignOutAccount(){ if(fbAuth) fbAuth.signOut(); }

  if(fbReady){
    fbAuth.onAuthStateChanged(function(user){
      var isSignOut = wasSignedIn && !user;
      fbUser = user;
      if(userDrawer.classList.contains("open")){ renderAccountPane(); renderProfileHeader(); }
      if(user){
        resolveCloudSync();
      }else if(isSignOut){
        syncLinked = false;
        try{ localStorage.removeItem(STORAGE_KEY); }catch(e){}
        applyData(emptyData());
        saveState();
        refreshAllUI();
      }
      wasSignedIn = !!user;
    });
  }

  function toggleTheme(){
    var html = document.documentElement;
    var next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    try{ localStorage.setItem("acta_theme_v2", next); }catch(e){}
    SFX.toggle();
  }

  function handleCommand(raw){
    var trimmed = raw.trim();
    if(!trimmed) return;
    pushEcho(trimmed);
    var tokens = trimmed.split(/\s+/);
    var cmd = tokens[0].toLowerCase();
    var args = tokens.slice(1);
    switch(cmd){
      case "/list":   openStats("overview"); break;
      case "/export": doExport(); break;
      case "/import": importFile.click(); break;
      case "/undo":   doUndo(); break;
      case "/redo":   doRedo(); break;
      case "/theme":  toggleTheme(); break;
      case "/clear":  cmdClear(); break;
      case "/help":   cmdHelp(); break;
      default:
        if(cmd.charAt(0) === "/"){ pushEntry(t("unknownCmd", { cmd:cmd }), "âœ•"); SFX.error(); }
        else { cmdAdd(tokens); }
    }
  }

  /* =========================================================
     Statistics modal
  ========================================================= */

  var activeTab = "overview";

  function openStats(tab){
    activeTab = tab || "overview";
    document.querySelectorAll(".tab-btn").forEach(function(b){ b.classList.toggle("active", b.dataset.tab === activeTab); });
    document.querySelectorAll(".tab-pane").forEach(function(p){ p.classList.toggle("active", p.id === "pane-"+activeTab); });
    renderActiveTab();
    overlayEl.classList.add("open");
    SFX.openPane();
  }
  function closeStats(){ overlayEl.classList.remove("open"); }
  function renderActiveTab(){
    if(activeTab === "overview") renderOverview();
    else if(activeTab === "history") renderHistory();
    else if(activeTab === "daily") renderDaily(currentDailyDate());
  }

  function renderOverview(){
    var pane = document.getElementById("pane-overview");
    pane.innerHTML = "";
    var names = Object.keys(state.tasks);
    var sub = document.createElement("div");
    sub.className = "sub";
    sub.textContent = t("overviewSummary", { count:names.length, ap:state.total_ap });
    pane.appendChild(sub);

    if(names.length === 0){
      var e = document.createElement("div"); e.id="empty"; e.textContent = t("overviewEmpty");
      pane.appendChild(e); return;
    }
    names.sort(function(a,b){ return state.tasks[b].count - state.tasks[a].count; });
    var maxCount = Math.max.apply(null, names.map(function(n){ return state.tasks[n].count; }));

    var wrap = document.createElement("div"); wrap.className = "tbl-wrap";
    var table = document.createElement("table");
    table.innerHTML = "<thead><tr><th>"+t("colTask")+"</th><th>"+t("colCount")+"</th><th>"+t("colTotalAp")+"</th></tr></thead>";
    var tbody = document.createElement("tbody");
    names.forEach(function(n){
      var tk = state.tasks[n];
      var displayName = tk.name || n;
      var totalApForTask = tk.total_ap !== undefined ? tk.total_ap : tk.count;
      var tr = document.createElement("tr");
      tr.innerHTML = "<td>"+escapeHtml(displayName)+"</td><td class='num'>"+tk.count+"</td><td class='num'>"+totalApForTask+"</td>";
      tbody.appendChild(tr);
    });
    table.appendChild(tbody); wrap.appendChild(table); pane.appendChild(wrap);

    var chartTitle = document.createElement("div");
    chartTitle.className = "sub"; chartTitle.style.marginTop = "18px"; chartTitle.textContent = t("freqTitle");
    pane.appendChild(chartTitle);

    names.forEach(function(n, i){
      var tk = state.tasks[n];
      var displayName = tk.name || n;
      var row = document.createElement("div"); row.className = "bar-row";
      var pct = maxCount > 0 ? Math.max(4, (tk.count/maxCount)*100) : 0;
      row.innerHTML = "<div class='bar-label'>"+escapeHtml(displayName)+"</div>"+
                      "<div class='bar-track'><div class='bar-fill' style='width:"+pct+"%; background:"+shadeFor(i,names.length,displayName)+"'></div></div>"+
                      "<div class='bar-count'>"+tk.count+"</div>";
      pane.appendChild(row);
    });
  }

  function renderMonthlyChart(container){
    var byMonth = {};
    state.history.forEach(function(h){
      var d = new Date(h.ts);
      var key = d.getFullYear()+"-"+pad(d.getMonth()+1);
      byMonth[key] = (byMonth[key]||0)+1;
    });
    var keys = Object.keys(byMonth).sort();
    if(keys.length === 0) return;
    var max = Math.max.apply(null, keys.map(function(k){ return byMonth[k]; }));
    var title = document.createElement("div");
    title.className = "sub";
    title.textContent = t("monthlyTitle");
    container.appendChild(title);
    var chart = document.createElement("div");
    chart.className = "month-chart";
    keys.forEach(function(k, i){
      var val = byMonth[k];
      var pct = max>0 ? Math.max(4,(val/max)*100) : 0;
      var parts = k.split("-");
      var label = parts[1]+"/"+parts[0].slice(2);
      var col = document.createElement("div");
      col.className = "month-col";
      col.innerHTML = "<div class='month-count'>"+val+"</div>"+
                      "<div class='month-bar-track'><div class='month-bar-fill' style='height:"+pct+"%; background:"+shadeFor(i,keys.length,k)+"'></div></div>"+
                      "<div class='month-label'>"+label+"</div>";
      chart.appendChild(col);
    });
    container.appendChild(chart);
  }

  function renderHistory(){
    var pane = document.getElementById("pane-history");
    pane.innerHTML = "";

    renderMonthlyChart(pane);

    var filters = document.createElement("div"); filters.className = "filters";
    filters.innerHTML = "<input type='text' id='histSearch' placeholder='"+t("searchPlaceholder")+"'>"+
                         "<input type='date' id='histDate'>"+
                         "<button id='histClear' type='button'>"+t("clearFilters")+"</button>";
    pane.appendChild(filters);
    var tableWrap = document.createElement("div"); pane.appendChild(tableWrap);

    function draw(){
      var q = document.getElementById("histSearch").value.trim().toLowerCase();
      var dateFilter = document.getElementById("histDate").value;
      var rows = state.history.filter(function(h){
        var mq = !q || h.task.toLowerCase().indexOf(q) !== -1;
        var md = !dateFilter || dateKey(h.ts) === dateFilter;
        return mq && md;
      }).slice().sort(function(a,b){ return b.ts - a.ts; });

      if(rows.length === 0){ tableWrap.innerHTML = "<div id='empty'>"+t("noMatch")+"</div>"; return; }

      var wrap = document.createElement("div"); wrap.className = "tbl-wrap";
      var table = document.createElement("table");
      table.innerHTML = "<thead><tr><th>"+t("colDate")+"</th><th>"+t("colTime")+"</th><th>"+t("colTask")+"</th><th>"+t("colAp")+"</th></tr></thead>";
      var tbody = document.createElement("tbody");
      rows.forEach(function(h){
        var tr = document.createElement("tr");
        tr.innerHTML = "<td>"+dateKey(h.ts)+"</td><td>"+timeKey(h.ts)+"</td><td>"+escapeHtml(h.task)+"</td><td class='num'>"+h.ap+"</td>";
        tbody.appendChild(tr);
      });
      table.appendChild(tbody); wrap.appendChild(table);
      tableWrap.innerHTML = ""; tableWrap.appendChild(wrap);
    }
    document.getElementById("histSearch").addEventListener("input", draw);
    document.getElementById("histDate").addEventListener("change", draw);
    document.getElementById("histClear").addEventListener("click", function(){
      document.getElementById("histSearch").value = ""; document.getElementById("histDate").value = ""; draw();
    });
    draw();
  }

  function currentDailyDate(){
    var el = document.getElementById("dailyDate");
    if(el && el.value) return el.value;
    var d = new Date();
    return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
  }

  function renderDaily(dateStr){
    var pane = document.getElementById("pane-daily");
    pane.innerHTML = "";
    var filters = document.createElement("div"); filters.className = "filters";
    filters.innerHTML = "<input type='date' id='dailyDate' value='"+dateStr+"'>";
    pane.appendChild(filters);

    var entries = state.history.filter(function(h){ return dateKey(h.ts) === dateStr; });
    var totalDay = entries.reduce(function(s,h){ return s + h.ap; }, 0);

    var top = document.createElement("div"); top.className = "daily-top";
    var bySp = {};
    entries.forEach(function(h){ bySp[h.task] = (bySp[h.task]||0) + h.ap; });
    var taskNames = Object.keys(bySp);
    taskNames.sort(function(a,b){ return bySp[b]-bySp[a]; });

    var donutWrap = document.createElement("div"); donutWrap.className = "donut-wrap";
    var donut = document.createElement("div"); donut.className = "donut";
    if(taskNames.length === 0){ donut.style.background = "var(--line)"; }
    else{
      var stops = []; var acc = 0;
      taskNames.forEach(function(n,i){
        var pct = (bySp[n]/totalDay)*100;
        var start = acc, end = acc+pct;
        stops.push(shadeFor(i,taskNames.length,n)+" "+start.toFixed(2)+"% "+end.toFixed(2)+"%");
        acc = end;
      });
      donut.style.background = "conic-gradient("+stops.join(",")+")";
    }
    donutWrap.appendChild(donut);
    var hole = document.createElement("div"); hole.className = "donut-hole";
    hole.innerHTML = "<div class='n'>"+totalDay+"</div><div class='l'>"+t("ap")+"</div>";
    donutWrap.appendChild(hole);
    top.appendChild(donutWrap);

    var legend = document.createElement("div"); legend.className = "legend";
    if(taskNames.length === 0){
      legend.innerHTML = "<div id='empty' style='padding:0;'>"+t("dailyEmpty")+"</div>";
    }else{
      taskNames.forEach(function(n,i){
        var pct = totalDay>0 ? Math.round((bySp[n]/totalDay)*100) : 0;
        var li = document.createElement("div"); li.className = "li";
        li.innerHTML = "<span class='sw' style='background:"+shadeFor(i,taskNames.length,n)+"'></span>"+escapeHtml(n)+" â€” "+bySp[n]+" "+t("ap")+" ("+pct+"%)";
        legend.appendChild(li);
      });
    }
    top.appendChild(legend); pane.appendChild(top);

    if(entries.length){
      var listTitle = document.createElement("div"); listTitle.className="sub"; listTitle.textContent = t("dailyEntries");
      pane.appendChild(listTitle);
      var wrap = document.createElement("div"); wrap.className = "tbl-wrap";
      var table = document.createElement("table");
      table.innerHTML = "<thead><tr><th>"+t("colTime")+"</th><th>"+t("colTask")+"</th><th>"+t("colAp")+"</th></tr></thead>";
      var tbody = document.createElement("tbody");
      entries.slice().sort(function(a,b){ return b.ts-a.ts; }).forEach(function(h){
        var tr = document.createElement("tr");
        tr.innerHTML = "<td>"+timeKey(h.ts)+"</td><td>"+escapeHtml(h.task)+"</td><td class='num'>"+h.ap+"</td>";
        tbody.appendChild(tr);
      });
      table.appendChild(tbody); wrap.appendChild(table); pane.appendChild(wrap);
    }
    document.getElementById("dailyDate").addEventListener("change", function(e){ renderDaily(e.target.value); });
  }

  /* =========================================================
     To-Do drawer
  ========================================================= */

  function refreshTodoBadge(){
    var pending = state.todos.filter(function(x){ return !x.done; }).length;
    todoBadge.style.display = pending > 0 ? "flex" : "none";
    todoBadge.textContent = pending;
  }

  function renderTodoList(){
    todoListEl.innerHTML = "";
    if(state.todos.length === 0){
      var e = document.createElement("div"); e.id = "empty"; e.textContent = t("todoEmpty");
      todoListEl.appendChild(e); return;
    }
    var pending = state.todos.filter(function(x){ return !x.done; });
    var done = state.todos.filter(function(x){ return x.done; }).sort(function(a,b){ return (b.completedAt||0)-(a.completedAt||0); });
    pending.concat(done).forEach(function(item){
      var row = document.createElement("div");
      row.className = "todo-item" + (item.done ? " done" : "");

      var check = document.createElement("div");
      check.className = "todo-check" + (item.done ? " done" : "");
      check.textContent = item.done ? "âœ“" : "";
      check.addEventListener("click", function(){ toggleTodoDone(item.id); });

      var txtWrap = document.createElement("div");
      txtWrap.className = "todo-text";
      var line = document.createElement("div");
      line.innerHTML = renderTodoText(item.text);
      txtWrap.appendChild(line);

      var del = document.createElement("button");
      del.className = "todo-del"; del.textContent = "âœ•"; del.type = "button";
      del.addEventListener("click", function(){ deleteTodo(item.id); });

      row.appendChild(check); row.appendChild(txtWrap); row.appendChild(del);
      todoListEl.appendChild(row);
    });
  }

  function renderTodoText(raw){
    return escapeHtml(raw).replace(/#(\S+)/g, "<span class='tag'>#$1</span>");
  }

  function parseTodoTask(raw){
    var clean = raw.replace(/#(\S+)/g, "").replace(/\s+/g," ").trim();
    return clean || raw.trim();
  }

  function addTodo(text){
    var clean = text.trim();
    if(!clean) return;
    pushUndo();
    state.todos.push({ id:uid(), text:clean, done:false, completedAt:null });
    saveState(); scheduleCloudSave(); refreshUndoRedoButtons(); refreshTodoBadge(); renderTodoList();
    SFX.click();
  }

  function toggleTodoDone(id){
    var item = state.todos.find(function(x){ return x.id === id; });
    if(!item) return;
    if(item.done){
      pushUndo();
      item.done = false; item.completedAt = null;
      saveState(); scheduleCloudSave(); refreshUndoRedoButtons(); refreshTodoBadge(); renderTodoList();
      return;
    }
    pushUndo();
    item.done = true; item.completedAt = Date.now();
    if(!item.key) item.key = uid();
    var taskName = normalizeTaskName(parseTodoTask(item.text));
    logAction(taskName, 1, true, item.key);
    afterMutation();
    pushEntry(t("todoDoneMsg", { task:taskName, ap:1 }), "âœ“");
    SFX.todoEasy();

    var rect = todoListEl.getBoundingClientRect();
    floatApGain(1, rect.left+rect.width/2, rect.top+30);
  }

  function deleteTodo(id){
    pushUndo();
    state.todos = state.todos.filter(function(x){ return x.id !== id; });
    saveState(); scheduleCloudSave(); refreshUndoRedoButtons(); refreshTodoBadge(); renderTodoList();
    SFX.click();
  }

  /* =========================================================
     Account drawer (Sync / Achievements / Language)
  ========================================================= */

  function renderProfileHeader(){
    var name = state.profile.name || "";
    profileNameInput.value = name;
    profileNameInput.placeholder = t("profileNamePlaceholder");
    var info = levelProgress(state.total_ap);
    profileLevelText.textContent = t("level") + " " + info.level;
    profileApText.textContent = state.total_ap + " " + t("ap");
    if(state.profile.avatar){
      profileAvatarImg.src = state.profile.avatar;
      profileAvatarImg.style.display = "block";
      profileAvatarFallback.style.display = "none";
    }else{
      profileAvatarImg.style.display = "none";
      profileAvatarFallback.style.display = "flex";
      profileAvatarFallback.textContent = (name.trim().charAt(0) || "?").toUpperCase();
    }
  }

  function saveProfileField(field, value){
    state.profile[field] = value;
    saveState();
    scheduleCloudSave();
    renderProfileHeader();
  }

  function handleAvatarFile(file){
    if(!file) return;
    var reader = new FileReader();
    reader.onload = function(){
      var img = new Image();
      img.onload = function(){
        var size = 220;
        var canvas = document.createElement("canvas");
        canvas.width = size; canvas.height = size;
        var ctx = canvas.getContext("2d");
        var side = Math.min(img.width, img.height);
        var sx = (img.width-side)/2, sy = (img.height-side)/2;
        ctx.drawImage(img, sx, sy, side, side, 0, 0, size, size);
        var dataUrl = canvas.toDataURL("image/jpeg", 0.82);
        saveProfileField("avatar", dataUrl);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  avatarWrap.addEventListener("click", function(){ avatarFileInput.click(); });
  avatarFileInput.addEventListener("change", function(){
    if(avatarFileInput.files && avatarFileInput.files[0]) handleAvatarFile(avatarFileInput.files[0]);
    avatarFileInput.value = "";
  });
  profileNameInput.addEventListener("change", function(){ saveProfileField("name", profileNameInput.value.trim()); });

  function renderAccountPane(){
    var pane = document.getElementById("acc-account");
    var syncBlock;
    if(fbUser){
      var label = fbUser.email || fbUser.displayName || fbUser.uid;
      syncBlock =
        "<div class='sub' style='margin-bottom:16px;'>"+t("syncedAs",{email:label})+"</div>"+
        "<div class='sub' style='margin-bottom:16px;'>"+t("syncActiveNote")+"</div>"+
        "<button class='sync-btn' id='signOutBtn' style='justify-content:center;'>"+t("signOut")+"</button>"+
        "<div class='sync-note' id='syncNote'></div>";
    }else{
      syncBlock =
        "<div class='sub' style='margin-bottom:16px;'>"+t("syncIntro")+"</div>"+
        "<button class='sync-btn' id='syncGoogleBtn'>"+t("syncGoogle")+"</button>"+
        "<button class='sync-btn' id='syncEmailToggleBtn'>"+t("syncEmail")+"</button>"+
        "<div id='emailForm' style='display:none; margin-top:6px;'>"+
          "<input type='email' id='syncEmailInput' placeholder='email@example.com' style='width:100%; margin-bottom:8px; background:var(--bg); border:1px solid var(--line); color:var(--ink); border-radius:10px; padding:9px 12px; font-size:12.5px; font-family:var(--font);'>"+
          "<input type='password' id='syncPassInput' placeholder='â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢' style='width:100%; margin-bottom:8px; background:var(--bg); border:1px solid var(--line); color:var(--ink); border-radius:10px; padding:9px 12px; font-size:12.5px; font-family:var(--font);'>"+
          "<button class='sync-btn' id='syncEmailSubmitBtn' style='justify-content:center;'>"+t("continueBtn")+"</button>"+
        "</div>"+
        "<div class='sync-note' id='syncNote'></div>";
    }

    pane.innerHTML = syncBlock;

    if(fbUser){
      document.getElementById("signOutBtn").addEventListener("click", function(){ fbSignOutAccount(); SFX.click(); });
    }else{
      document.getElementById("syncGoogleBtn").addEventListener("click", function(){ fbSignInGoogle(); SFX.click(); });
      document.getElementById("syncEmailToggleBtn").addEventListener("click", function(){
        var f = document.getElementById("emailForm");
        f.style.display = (f.style.display === "none") ? "block" : "none";
        SFX.click();
      });
      document.getElementById("syncEmailSubmitBtn").addEventListener("click", function(){
        var email = document.getElementById("syncEmailInput").value.trim();
        var pass = document.getElementById("syncPassInput").value;
        if(!email || !pass){ showSyncNote(t("syncFillFields")); return; }
        fbSignInEmail(email, pass);
      });
    }
  }

  function renderDefaultPane(){
    var pane = document.getElementById("acc-default");
    pane.innerHTML =
      "<div class='profile-field'><label>"+t("profileBioLabel")+"</label><textarea id='profileBioInput' rows='4' placeholder='"+t("profileBioPlaceholder")+"'>"+escapeHtml(state.profile.bio||"")+"</textarea></div>"+
      "<div class='profile-field'><label>"+t("profileCountryLabel")+"</label><input type='text' id='profileCountryInput' placeholder='"+t("profileCountryPlaceholder")+"' value=\""+escapeHtml(state.profile.country||"")+"\"></div>";
    document.getElementById("profileBioInput").addEventListener("change", function(e){ saveProfileField("bio", e.target.value.trim()); });
    document.getElementById("profileCountryInput").addEventListener("change", function(e){ saveProfileField("country", e.target.value.trim()); });
  }

  function renderAchievementsTab(){
    var pane = document.getElementById("acc-achievements");
    var curLevel = levelProgress(state.total_ap).level;
    pane.innerHTML = "<div class='sub' style='margin-bottom:14px;'>"+t("achIntro")+"</div><div class='ach-grid' id='achGrid'></div>";
    var grid = document.getElementById("achGrid");
    MILESTONES.forEach(function(m){
      var unlocked = (m === 0 && milestoneState.level0Shown) || curLevel >= m;
      var card = document.createElement("div");
      card.className = "ach-card" + (unlocked ? " unlocked" : "");
      var badge = "<div class='ach-badge'>"+m+"</div>";
      var body;
      if(unlocked){
        body = "<div class='ach-body'><div class='t'>"+t("level")+" "+m+"</div><div class='d'>"+slogan(m)+"</div></div>";
      }else{
        body = "<div class='ach-body'><div class='t'>"+t("level")+" "+m+"</div><div class='d'>"+t("achLocked")+"</div></div>";
      }
      card.innerHTML = badge + body;
      grid.appendChild(card);
    });
  }

  function renderLanguageTab(){
    var pane = document.getElementById("acc-language");
    pane.innerHTML = "<div class='sub' style='margin-bottom:14px;'>"+t("langIntro")+"</div><div id='langList'></div>";
    var list = document.getElementById("langList");
    LANGS.forEach(function(code){
      var btn = document.createElement("button");
      btn.className = "lang-btn" + (code === currentLang ? " sel" : "");
      btn.innerHTML = "<span>"+LANG_NAMES[code]+"</span>" + (code===currentLang ? "<span>âœ“</span>" : "");
      btn.addEventListener("click", function(){
        setLanguage(code);
      });
      list.appendChild(btn);
    });
  }

  function profileLinkUrl(){
    if(!fbUser) return null;
    return location.origin + location.pathname + "?u=" + fbUser.uid;
  }

  function simpleHash(){
    var str = Array.prototype.slice.call(arguments).join("|");
    var h = 0;
    for(var i=0;i<str.length;i++){ h = (h*31 + str.charCodeAt(i)) >>> 0; }
    return h.toString(36).toUpperCase().slice(0,8);
  }

  function roundRectPath(ctx,x,y,w,h,r){
    ctx.beginPath();
    ctx.moveTo(x+r,y);
    ctx.arcTo(x+w,y,x+w,y+h,r);
    ctx.arcTo(x+w,y+h,x,y+h,r);
    ctx.arcTo(x,y+h,x,y,r);
    ctx.arcTo(x,y,x+w,y,r);
    ctx.closePath();
  }

  function computeHeatmapData(){
    var dayCounts = {};
    var today = new Date();
    for(var i=0;i<140;i++){
      var d = new Date(today); d.setDate(today.getDate()-i);
      dayCounts[d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate())] = 0;
    }
    state.history.forEach(function(h){ var dk=dateKey(h.ts); if(dayCounts[dk]!==undefined) dayCounts[dk]++; });
    return dayCounts;
  }

  function drawHeatmap(ctx, x0, y0, cellSize, gap, weeks, dayCounts){
    weeks = weeks || 18;
    dayCounts = dayCounts || {};
    var today = new Date();
    var max = 1;
    Object.keys(dayCounts).forEach(function(k){ if(dayCounts[k]>max) max=dayCounts[k]; });
    for(var col=weeks-1; col>=0; col--){
      for(var row=0; row<7; row++){
        var daysAgo = col*7 + (6-row);
        var d = new Date(today); d.setDate(today.getDate()-daysAgo);
        var dk = d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
        var c = dayCounts[dk]||0;
        var alpha = c===0 ? 0.07 : Math.min(1, 0.25 + (c/max)*0.75);
        ctx.fillStyle = c===0 ? "rgba(255,255,255,0.07)" : "rgba(57,211,83,"+alpha.toFixed(2)+")";
        var cx = x0 + (weeks-1-col)*(cellSize+gap);
        var cy = y0 + row*(cellSize+gap);
        roundRectPath(ctx, cx, cy, cellSize, cellSize, 2);
        ctx.fill();
      }
    }
  }

  function buildCardData(){
    var info = levelProgress(state.total_ap);
    var names = Object.keys(state.tasks).sort(function(a,b){ return (state.tasks[b].total_ap||state.tasks[b].count) - (state.tasks[a].total_ap||state.tasks[a].count); }).slice(0,4);
    var topTasks = names.map(function(n){ return { name: state.tasks[n].name||n, value: state.tasks[n].total_ap||state.tasks[n].count }; });
    return {
      name: state.profile.name || (fbUser && (fbUser.displayName||fbUser.email)) || "Guest",
      country: state.profile.country || "",
      avatar: state.profile.avatar || null,
      level: info.level,
      total_ap: state.total_ap,
      maxStreak: state.maxStreak || 0,
      tasksDone: state.history.length,
      topTasks: topTasks,
      heatmap: computeHeatmapData(),
      link: profileLinkUrl(),
      verifiedKey: fbUser ? fbUser.uid : "guest"
    };
  }

  function paintActaCard(canvas, cardData, avatarImg){
    var W = 1280, H = 720;
    canvas.width = W; canvas.height = H;
    var ctx = canvas.getContext("2d");
    var FONT = "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif";
    var margin = 48;

    var bgGrad = ctx.createLinearGradient(0,0,W,H);
    bgGrad.addColorStop(0,"#0a0a12"); bgGrad.addColorStop(1,"#0d1117");
    ctx.fillStyle = bgGrad; ctx.fillRect(0,0,W,H);

    ctx.strokeStyle = "rgba(255,255,255,0.035)"; ctx.lineWidth = 1;
    for(var gx=0; gx<W; gx+=40){ ctx.beginPath(); ctx.moveTo(gx,0); ctx.lineTo(gx,H); ctx.stroke(); }
    for(var gy=0; gy<H; gy+=40){ ctx.beginPath(); ctx.moveTo(0,gy); ctx.lineTo(W,gy); ctx.stroke(); }

    var glow = ctx.createRadialGradient(W-90,90,10,W-90,90,380);
    glow.addColorStop(0,"rgba(0,229,255,0.14)"); glow.addColorStop(1,"rgba(0,229,255,0)");
    ctx.fillStyle = glow; ctx.fillRect(0,0,W,H);

    // ---- top row: big title left, date right ----
    ctx.textAlign = "left";
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 38px "+FONT;
    ctx.fillText("ACTA ID", margin, 66);

    var now = new Date();
    ctx.textAlign = "right";
    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.font = "700 20px "+FONT;
    ctx.fillText(now.toLocaleDateString(), W-margin, 62);
    ctx.textAlign = "left";

    // ---- left block: avatar + name + level ----
    var avSize = 140, avX = margin, avY = 108;
    ctx.save();
    roundRectPath(ctx, avX, avY, avSize, avSize, 24);
    ctx.clip();
    if(avatarImg){ ctx.drawImage(avatarImg, avX, avY, avSize, avSize); }
    else{
      ctx.fillStyle = "#1c1c22"; ctx.fillRect(avX,avY,avSize,avSize);
      ctx.fillStyle = "rgba(255,255,255,0.4)";
      ctx.font = "800 56px "+FONT;
      var initial = (cardData.name||"?").trim().charAt(0).toUpperCase() || "?";
      ctx.fillText(initial, avX+avSize/2-18, avY+avSize/2+20);
    }
    ctx.restore();

    var nameX = avX+avSize+28;
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 32px "+FONT;
    var nameStr = cardData.name || "Guest";
    if(nameStr.length>18) nameStr = nameStr.slice(0,18)+"â€¦";
    ctx.fillText(nameStr, nameX, avY+52);

    ctx.fillStyle = "#00e5ff";
    ctx.font = "700 18px "+FONT;
    ctx.fillText("LEVEL "+cardData.level, nameX, avY+86);

    if(cardData.country){
      ctx.fillStyle = "rgba(255,255,255,0.45)";
      ctx.font = "600 13px "+FONT;
      ctx.fillText(cardData.country, nameX, avY+112);
    }

    // ---- tasks done / AP row, below avatar block ----
    var statY = avY + avSize + 66;
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font = "700 13px "+FONT;
    ctx.fillText("TASKS DONE", margin, statY-30);
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 46px "+FONT;
    ctx.fillText(String(cardData.tasksDone||0), margin, statY+14);

    var apX = margin + 220;
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font = "700 13px "+FONT;
    ctx.fillText("AP", apX, statY-30);
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 46px "+FONT;
    ctx.fillText(String(cardData.total_ap), apX, statY+14);

    // ---- right block: streak + heatmap, then top-task bars ----
    var rightX = 700;
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font = "700 13px "+FONT;
    ctx.fillText("STREAK", rightX, 106);
    ctx.fillStyle = "#39d353";
    ctx.font = "800 30px "+FONT;
    ctx.fillText(String(cardData.maxStreak||0)+" DAY STREAK", rightX, 140);

    drawHeatmap(ctx, rightX, 164, 13, 5, 20, cardData.heatmap);

    var topTasks = cardData.topTasks || [];
    var totalTop = topTasks.reduce(function(s,x){ return s+x.value; }, 0) || 1;
    var barX = rightX, barY = 330, barW = 400;
    topTasks.forEach(function(item,i){
      var pct = Math.round((item.value/totalTop)*100);
      var by = barY + i*46;
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.font = "600 12px "+FONT;
      ctx.fillText(item.name.length>24 ? item.name.slice(0,24)+"â€¦" : item.name, barX, by-6);
      ctx.fillStyle = "rgba(255,255,255,0.08)";
      roundRectPath(ctx, barX, by, barW, 8, 4); ctx.fill();
      ctx.fillStyle = CHART_COLORS[i % CHART_COLORS.length];
      roundRectPath(ctx, barX, by, Math.max(6,barW*(item.value/totalTop)), 8, 4); ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,0.4)"; ctx.font = "600 11px "+FONT;
      ctx.fillText(pct+"%", barX+barW+8, by+8);
    });

    // ---- bottom row ----
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.font = "600 13px "+FONT;
    if(cardData.link) ctx.fillText(cardData.link, margin, H-26);

    ctx.textAlign = "right";
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = "800 22px "+FONT;
    ctx.fillText("Thank you", W-margin, H-56);
    var hash = simpleHash(cardData.verifiedKey||"guest", cardData.level, cardData.total_ap, dateKey(now.getTime()));
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.font = "700 15px "+FONT;
    ctx.fillText("Verified Â· "+hash, W-margin, H-28);
    ctx.textAlign = "left";
  }

  function paintCardWithAvatar(canvas, cardData){
    if(cardData.avatar){
      var img = new Image();
      img.onload = function(){ paintActaCard(canvas, cardData, img); };
      img.onerror = function(){ paintActaCard(canvas, cardData, null); };
      img.src = cardData.avatar;
    }else{
      paintActaCard(canvas, cardData, null);
    }
  }

  function drawActaCard(canvas){
    paintCardWithAvatar(canvas, buildCardData());
  }

  function renderActaCardPane(){
    var pane = document.getElementById("acc-card");
    if(!fbUser){
      pane.innerHTML = "<div class='sub'>"+t("actaCardNeedSignIn")+"</div>";
      return;
    }
    pane.innerHTML =
      "<div class='card-preview-wrap'>"+
        "<canvas id='actaCardCanvas'></canvas>"+
        "<button id='actaCardDownloadBtn'>"+t("actaCardDownload")+"</button>"+
        "<div class='card-link-row' id='cardLinkRow'></div>"+
      "</div>";
    var canvas = document.getElementById("actaCardCanvas");
    drawActaCard(canvas);
    document.getElementById("cardLinkRow").textContent = profileLinkUrl() || "";
    document.getElementById("actaCardDownloadBtn").addEventListener("click", function(){
      var a = document.createElement("a");
      a.download = "acta-card.png";
      a.href = canvas.toDataURL("image/png");
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      SFX.click();
    });
  }

  function renderAccountDrawer(){
    renderProfileHeader();
    renderDefaultPane();
    renderAchievementsTab();
    renderAccountPane();
    renderLanguageTab();
    renderActaCardPane();
    document.querySelectorAll(".profile-nav-btn[data-pnav]").forEach(function(b){ b.classList.remove("active"); });
    document.querySelectorAll(".acc-pane").forEach(function(p){ p.classList.toggle("active", p.id === "acc-default"); });
  }

  document.getElementById("pnavEraseBtn").addEventListener("click", function(){
    showConfirm(t("eraseConfirmMsg"), eraseAllData);
  });

  function setLanguage(code){
    currentLang = code;
    settings.lang = code;
    saveSettings();
    applyStaticText();
    renderAccountDrawer();
    if(overlayEl.classList.contains("open")) renderActiveTab();
    if(todoDrawer.classList.contains("open")) renderTodoList();
    SFX.lang();
  }

  /* =========================================================
     Static text application (i18n)
  ========================================================= */

  function applyStaticText(){
    document.getElementById("taglineText").textContent = t("tagline");
    document.getElementById("lvPrefix").textContent = t("level");
    document.getElementById("apSuffix").textContent = t("ap");
    document.getElementById("streakLabelText").textContent = t("streak");
    document.getElementById("todayCountLabelText").textContent = t("todayLabel");
    document.getElementById("exportJsonLabel").textContent = t("exportJsonLabel");
    document.getElementById("exportPdfLabel").textContent = t("exportPdfLabel");
    document.getElementById("statsBtnLabel").textContent = t("stats");
    document.getElementById("todoBtnLabel").textContent = t("todo");
    document.getElementById("dockHint").textContent = t("hint");
    document.getElementById("statsTitleText").textContent = t("statsTitle");
    document.getElementById("tabOverviewBtn").textContent = t("tabOverview");
    document.getElementById("tabHistoryBtn").textContent = t("tabHistory");
    document.getElementById("tabDailyBtn").textContent = t("tabDaily");
    document.getElementById("todoDrawerTitle").textContent = t("todo");
    document.getElementById("todoAddInput").placeholder = t("todoAddPlaceholder");
    document.getElementById("accountTitleText").textContent = t("settingsTitle");
    document.getElementById("pnavAchBtn").textContent = t("tabAchievements");
    document.getElementById("pnavAccountBtn").textContent = t("account");
    document.getElementById("pnavLangBtn").textContent = t("tabLanguage");
    document.getElementById("pnavCardBtn").textContent = t("navActaCard");
    document.getElementById("pnavEraseBtn").textContent = t("eraseData");
    document.getElementById("soundLabelText").textContent = t("soundLabel");
    document.getElementById("vibLabelText").textContent = t("vibLabel");
    document.getElementById("volLabelText").textContent = t("volLabel");
    document.getElementById("modalCloseX").setAttribute("aria-label", t("close"));
    document.getElementById("levelTooltip").textContent = t("apTooltip");
    document.getElementById("firstRunTitleText").textContent = t("firstRunTitle");
    document.getElementById("firstRunMsgText").textContent = t("firstRunMsg");
    document.getElementById("firstRunSignInBtn").textContent = t("firstRunSignIn");
    document.getElementById("firstRunLaterBtn").textContent = t("firstRunLater");
    renderProfileHeader();
    document.documentElement.setAttribute("lang", currentLang);
  }

  /* =========================================================
     Command palette (suggestions)
  ========================================================= */

  function commandEntries(){
    return CMD_LIST.map(function(key){
      return { cmd:CMD_SLASH[key], args:CMD_ARGS[key], desc:t("cmd"+key.charAt(0).toUpperCase()+key.slice(1)) };
    });
  }

  function renderSuggest(filterText){
    var all = commandEntries();
    suggestItems = all.filter(function(c){ return c.cmd.toLowerCase().indexOf(filterText.toLowerCase()) === 0; });
    suggestActive = suggestItems.length ? 0 : -1;
    drawSuggest();
  }
  function drawSuggest(){
    if(suggestItems.length === 0){ suggestEl.classList.remove("open"); suggestEl.innerHTML=""; return; }
    suggestEl.innerHTML = "";
    suggestItems.forEach(function(c,i){
      var item = document.createElement("div");
      item.className = "item" + (i===suggestActive ? " active" : "");
      item.innerHTML = "<div class='row1'><span class='cmdname'>"+c.cmd+"</span><span class='args'>"+escapeHtml(c.args)+"</span></div><div class='desc'>"+escapeHtml(c.desc)+"</div>";
      item.addEventListener("mousedown", function(ev){ ev.preventDefault(); selectSuggest(i); });
      suggestEl.appendChild(item);
    });
    suggestEl.classList.add("open");
  }
  function selectSuggest(i){
    var c = suggestItems[i]; if(!c) return;
    cmdEl.value = c.cmd + " ";
    suggestEl.classList.remove("open"); suggestItems = [];
    cmdEl.focus();
  }
  function suggestionsShouldShow(value){ return value.charAt(0) === "/" && value.indexOf(" ") === -1; }

  cmdEl.addEventListener("input", function(){
    var v = cmdEl.value;
    if(suggestionsShouldShow(v)) renderSuggest(v);
    else { suggestEl.classList.remove("open"); suggestItems = []; }
  });

  cmdEl.addEventListener("keydown", function(e){
    var suggestOpen = suggestEl.classList.contains("open") && suggestItems.length > 0;
    if(suggestOpen && (e.key==="ArrowDown"||e.key==="ArrowUp")){
      e.preventDefault();
      if(e.key==="ArrowDown") suggestActive=(suggestActive+1)%suggestItems.length;
      else suggestActive=(suggestActive-1+suggestItems.length)%suggestItems.length;
      drawSuggest(); return;
    }
    if(suggestOpen && (e.key==="Enter"||e.key==="Tab")){ e.preventDefault(); selectSuggest(suggestActive); return; }
    if(e.key==="Escape" && suggestOpen){ suggestEl.classList.remove("open"); suggestItems=[]; return; }
    if(e.key==="Enter"){
      var val = cmdEl.value;
      if(val.trim()){ cmdHistory.push(val); cmdHistoryIdx = cmdHistory.length; }
      cmdEl.value = ""; handleCommand(val); return;
    }
    if(!suggestOpen && e.key==="ArrowUp"){
      if(cmdHistory.length){ cmdHistoryIdx = Math.max(0,cmdHistoryIdx-1); cmdEl.value = cmdHistory[cmdHistoryIdx]||""; e.preventDefault(); }
    }else if(!suggestOpen && e.key==="ArrowDown"){
      if(cmdHistory.length){ cmdHistoryIdx = Math.min(cmdHistory.length,cmdHistoryIdx+1); cmdEl.value = cmdHistory[cmdHistoryIdx]||""; e.preventDefault(); }
    }
  });

  /* =========================================================
     Drawers
  ========================================================= */

  var openDrawerEl = null;
  function openDrawer(el){
    if(openDrawerEl && openDrawerEl !== el) openDrawerEl.classList.remove("open");
    el.classList.add("open");
    drawerScrim.classList.add("open");
    openDrawerEl = el;
    SFX.drawer();
  }
  function closeDrawer(el){
    el.classList.remove("open");
    if(openDrawerEl === el) openDrawerEl = null;
    if(!todoDrawer.classList.contains("open") && !userDrawer.classList.contains("open")) drawerScrim.classList.remove("open");
  }
  drawerScrim.addEventListener("click", function(){
    closeDrawer(todoDrawer); closeDrawer(userDrawer);
  });
  document.querySelectorAll("[data-close]").forEach(function(btn){
    btn.addEventListener("click", function(){ closeDrawer(document.getElementById(btn.dataset.close)); });
  });

  todoBtn.addEventListener("click", function(){ renderTodoList(); openDrawer(todoDrawer); });
  avatarBtn.addEventListener("click", function(){ renderAccountDrawer(); openDrawer(userDrawer); });

  document.querySelectorAll(".profile-nav-btn[data-pnav]").forEach(function(btn){
    btn.addEventListener("click", function(){
      document.querySelectorAll(".profile-nav-btn[data-pnav]").forEach(function(b){ b.classList.toggle("active", b===btn); });
      document.querySelectorAll(".acc-pane").forEach(function(p){ p.classList.toggle("active", p.id === "acc-"+btn.dataset.pnav); });
      SFX.click();
    });
  });

  todoAddBtn.addEventListener("click", function(){
    addTodo(todoAddInput.value);
    todoAddInput.value = ""; todoAddInput.focus();
  });
  todoAddInput.addEventListener("keydown", function(e){
    if(e.key === "Enter"){ addTodo(todoAddInput.value); todoAddInput.value = ""; }
  });

  /* =========================================================
     Toolbar wiring
  ========================================================= */

  document.querySelectorAll(".tab-btn").forEach(function(btn){ btn.addEventListener("click", function(){ openStats(btn.dataset.tab); }); });
  modalCloseX.addEventListener("click", closeStats);
  overlayEl.addEventListener("click", function(e){ if(e.target===overlayEl) closeStats(); });
  milestoneCloseBtn.addEventListener("click", closeMilestone);
  milestoneOverlay.addEventListener("click", function(e){ if(e.target===milestoneOverlay) closeMilestone(); });
  function isTypingContext(){
    var el = document.activeElement;
    if(!el) return false;
    var tag = el.tagName;
    return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
  }

  document.addEventListener("keydown", function(e){
    var mod = e.ctrlKey || e.metaKey;

    if(e.key === "Escape"){
      if(overlayEl.classList.contains("open")) closeStats();
      if(milestoneOverlay.classList.contains("open")) closeMilestone();
      if(confirmOverlay.classList.contains("open")) closeConfirm();
      if(soundPop.classList.contains("open")) soundPop.classList.remove("open");
      if(document.getElementById("exportPop").classList.contains("open")) document.getElementById("exportPop").classList.remove("open");
      if(firstRunOverlay.classList.contains("open")) dismissFirstRun();
      if(todoDrawer.classList.contains("open")) closeDrawer(todoDrawer);
      if(userDrawer.classList.contains("open")) closeDrawer(userDrawer);
      return;
    }
    if(mod && (e.key === "k" || e.key === "K")){ e.preventDefault(); cmdEl.focus(); return; }
    if(e.key === "/" && !isTypingContext()){ e.preventDefault(); cmdEl.focus(); return; }
    if(mod && !e.shiftKey && (e.key === "z" || e.key === "Z") && !isTypingContext()){ e.preventDefault(); doUndo(); return; }
    if(mod && ((e.key === "y" || e.key === "Y") || (e.shiftKey && (e.key === "z" || e.key === "Z"))) && !isTypingContext()){ e.preventDefault(); doRedo(); return; }
    if(mod && (e.key === "e" || e.key === "E")){ e.preventDefault(); doExport(); return; }
    if(mod && (e.key === "o" || e.key === "O")){ e.preventDefault(); importFile.click(); return; }
    if(mod && e.shiftKey && (e.key === "s" || e.key === "S")){ e.preventDefault(); openStats("overview"); return; }
    if(mod && e.shiftKey && (e.key === "l" || e.key === "L")){ e.preventDefault(); toggleTheme(); return; }
  });

  statsBtn.addEventListener("click", function(){ openStats("overview"); });
  var exportPop = document.getElementById("exportPop");
  exportBtn.addEventListener("click", function(e){ e.stopPropagation(); exportPop.classList.toggle("open"); });
  document.getElementById("exportJsonBtn").addEventListener("click", function(){ exportPop.classList.remove("open"); doExport(); });
  document.getElementById("exportPdfBtn").addEventListener("click", function(){ exportPop.classList.remove("open"); doExportPdf(); });
  document.addEventListener("click", function(e){
    if(exportPop.classList.contains("open") && !exportPop.contains(e.target) && e.target !== exportBtn && !exportBtn.contains(e.target)){
      exportPop.classList.remove("open");
    }
  });
  importBtn.addEventListener("click", function(){ importFile.click(); });
  importFile.addEventListener("change", function(){
    if(importFile.files && importFile.files[0]) doImportFile(importFile.files[0]);
    importFile.value = "";
  });
  undoBtn.addEventListener("click", doUndo);
  redoBtn.addEventListener("click", doRedo);
  themeToggle.addEventListener("click", toggleTheme);

  soundBtn.addEventListener("click", function(e){ e.stopPropagation(); soundPop.classList.toggle("open"); });
  document.addEventListener("click", function(e){
    if(soundPop.classList.contains("open") && !soundPop.contains(e.target) && e.target!==soundBtn) soundPop.classList.remove("open");
  });
  soundSwitch.addEventListener("click", function(){
    settings.sound = !settings.sound; soundSwitch.classList.toggle("on", settings.sound); saveSettings();
    if(settings.sound) SFX.toggle();
  });
  vibSwitch.addEventListener("click", function(){
    settings.vibration = !settings.vibration; vibSwitch.classList.toggle("on", settings.vibration); saveSettings(); buzz(10);
  });
  volSlider.addEventListener("input", function(){ settings.volume = Number(volSlider.value); saveSettings(); });

  /* =========================================================
     Public profile page (?u=<uid> query param)
  ========================================================= */

  function renderPublicProfileNotFound(){
    document.getElementById("publicProfileInner").innerHTML =
      "<div style='margin-top:80px;'><div style='font-size:16px;font-weight:800;margin-bottom:14px;'>"+t("publicProfileNotFound")+"</div>"+
      "<a href='"+location.origin+location.pathname+"' style='color:var(--ink-dim); font-size:12px;'>"+t("publicProfileTryActa")+"</a></div>";
  }

  function renderPublicProfile(data, uid){
    var inner = document.getElementById("publicProfileInner");
    inner.innerHTML =
      "<canvas id='publicCardCanvas' style='width:100%; max-width:480px; aspect-ratio:16/9; border-radius:14px; border:1px solid var(--line); background:#0a0a0d;'></canvas>"+
      (data.bio ? "<div style='margin-top:20px; font-size:13px; color:var(--ink-dim);'>"+escapeHtml(data.bio)+"</div>" : "")+
      "<div style='margin-top:26px;'><a href='"+location.origin+location.pathname+"' style='color:var(--ink); font-weight:700; font-size:13px;'>"+t("publicProfileTryActa")+"</a></div>";
    var canvas = document.getElementById("publicCardCanvas");
    var cardData = {
      name: data.name || "Guest", country: data.country || "", avatar: data.avatar || null,
      level: data.level || 0, total_ap: data.total_ap || 0, maxStreak: data.maxStreak || 0,
      topTasks: data.topTasks || [], heatmap: data.heatmap || {},
      link: location.origin + location.pathname + "?u=" + uid, verifiedKey: uid
    };
    paintCardWithAvatar(canvas, cardData);
  }

  function checkPublicProfileMode(){
    var params = new URLSearchParams(location.search);
    var uid = params.get("u");
    if(!uid) return;
    publicProfilePage.classList.add("open");
    document.getElementById("publicProfileInner").innerHTML = "<div class='sub' style='margin-top:80px;'>"+t("publicProfileLoading")+"</div>";
    if(!fbReady || !fbDb){ renderPublicProfileNotFound(); return; }
    fbDb.collection("publicProfiles").doc(uid).get().then(function(snap){
      if(!snap.exists){ renderPublicProfileNotFound(); return; }
      renderPublicProfile(snap.data(), uid);
    }).catch(function(){ renderPublicProfileNotFound(); });
  }

  /* =========================================================
     First-run login popup (shown once)
  ========================================================= */

  var FIRST_RUN_KEY = "acta_first_run_seen";
  function maybeShowFirstRunPopup(){
    try{ if(localStorage.getItem(FIRST_RUN_KEY)) return; }catch(e){ return; }
    setTimeout(function(){ firstRunOverlay.classList.add("open"); }, 900);
  }
  function dismissFirstRun(){
    firstRunOverlay.classList.remove("open");
    try{ localStorage.setItem(FIRST_RUN_KEY, "1"); }catch(e){}
  }
  document.getElementById("firstRunSignInBtn").addEventListener("click", function(){
    dismissFirstRun();
    renderAccountDrawer();
    document.querySelectorAll(".profile-nav-btn[data-pnav]").forEach(function(b){ b.classList.toggle("active", b.dataset.pnav==="account"); });
    document.querySelectorAll(".acc-pane").forEach(function(p){ p.classList.toggle("active", p.id==="acc-account"); });
    openDrawer(userDrawer);
    SFX.click();
  });
  document.getElementById("firstRunLaterBtn").addEventListener("click", function(){ dismissFirstRun(); SFX.click(); });
  firstRunOverlay.addEventListener("click", function(e){ if(e.target===firstRunOverlay) dismissFirstRun(); });


  (function initTheme(){
    try{
      var saved = localStorage.getItem("acta_theme_v2");
      if(saved==="light"||saved==="dark") document.documentElement.setAttribute("data-theme", saved);
    }catch(e){}
  })();

  soundSwitch.classList.toggle("on", settings.sound);
  vibSwitch.classList.toggle("on", settings.vibration);
  volSlider.value = settings.volume;

  applyStaticText();
  refreshTotals();
  refreshUndoRedoButtons();
  refreshTodoBadge();
  lastKnownLevel = levelProgress(state.total_ap).level;

  pushEntry(t("bootMsg"), "Â·", true);
  pushEntry(t("philMsg"), "Â·", true);
  pushEntry(t("helpMsg"), "Â·", true);
  renderStreak();

  if(state.history.length === 0) maybeShowLevelZero();

  checkPublicProfileMode();
  maybeShowFirstRunPopup();

})();

