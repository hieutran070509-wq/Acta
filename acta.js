
(function(){
  "use strict";

  /* =========================================================
     i18n
  ========================================================= */

  var LANGS = ["en","vi","es","fr","de","pt","ja","ko","zh","ru","hi","id"];
  var LANG_NAMES = { en:"English", vi:"Tiếng Việt", es:"Español", fr:"Français", de:"Deutsch", pt:"Português", ja:"日本語", ko:"한국어", zh:"中文", ru:"Русский", hi:"हिन्दी", id:"Bahasa Indonesia" };

  var STRINGS = {
    en:{ tagline:"things done — not things planned", level:"LEVEL", ap:"AP", streak:"day streak",
      stats:"Statistics", todo:"To-Do", hint:"No pressure, just progress. What did you complete today?",
      tabOverview:"Overview", tabHistory:"History", tabDaily:"Daily", statsTitle:"STATISTICS",
      overviewEmpty:"The repository is empty. Type /add <task> to start logging.",
      overviewSummary:"{count} tracked task(s) · {ap} total AP",
      colTask:"Task", colCount:"Count", colTotalAp:"Total AP", colDate:"Date", colTime:"Time", colAp:"AP",
      searchPlaceholder:"Search by task name…", clearFilters:"Clear filters", noMatch:"No entries match this search.",
      dailyEntries:"ENTRIES", dailyEmpty:"No actions logged on this day.", freqTitle:"FREQUENCY",
      todoAddPlaceholder:"Add a task…", todoEmpty:"Nothing here yet. Add your first task above.",
      diffEasy:"Easy", diffNormal:"Normal", diffHard:"Hard",
      tabSync:"Sync", tabAchievements:"Achievements", tabLanguage:"Language",
      syncIntro:"Connect an account to sync your data across devices.",
      syncSoon:"Cloud sync is coming in a future update. For now, use Export / Import to move your data between devices.",
      syncGoogle:"Continue with Google", syncGithub:"Continue with GitHub", syncApple:"Continue with Apple", syncEmail:"Continue with Email",
      achIntro:"Reach these levels to unlock them.", achLocked:"Locked",
      langIntro:"Choose your language. Everything switches — every screen, every message.",
      soundLabel:"Sound", vibLabel:"Vibration", volLabel:"Volume", close:"Close",
      bootMsg:"Session started — Acta v4.0", philMsg:"Philosophy: things done, not things planned. No schedule, only recognition.",
      helpMsg:"Type /help for the command list, or just type what you did.", helpHeader:"COMMAND LIST",
      unknownCmd:"Unknown command: \"{cmd}\". Type /help for the command list.",
      addUsage:"Usage: /add <task>", addInvalid:"That task name isn't valid.",
      addExisting:"+1 AP — \"{task}\" (occurrence #{count})", addNew:"New task registered: \"{task}\" (+1 AP)",
      delUsage:"Usage: /del <task>", delOk:"Removed \"{task}\" from the repository.", delNotFound:"\"{task}\" was not found in the repository.",
      clearedMsg:"Feed cleared. Your data is untouched.", exportedMsg:"Backup file downloaded.",
      importedMsg:"Data imported from \"{file}\".", importFailed:"Import failed: the file isn't valid JSON.", importReadFail:"Import failed: could not read the file.",
      undidMsg:"Undid the last action.", redidMsg:"Redid the last undone action.",
      todoDoneMsg:"Completed \"{task}\" (+{ap} AP) · To-Do", levelUp:"Level {level}!", nicedBtn:"Nice!", account:"Account",
      cmdAdd:"Log an action. Existing task adds AP and increments its count; a new one registers automatically.",
      cmdDel:"Remove a task from the repository.", cmdList:"Open Statistics.", cmdExport:"Download a backup of your data as JSON.",
      cmdImport:"Load data from a backup JSON file.", cmdUndo:"Undo the last action.", cmdRedo:"Redo the last undone action.",
      cmdTheme:"Toggle light / dark theme.", cmdClear:"Clear the feed. Your data is kept.", cmdHelp:"Show this list again.",
      dataLabel:"Data", eraseData:"Erase all data", eraseConfirmMsg:"This will permanently delete all your AP, tasks, history and to-dos. This cannot be undone.",
      erasedMsg:"All data erased.", cancelBtn:"Cancel", confirmBtn:"Erase", restoreHint:"Use Import to restore from a backup.",
      apTooltip:"AP = Acta Point, earned by completing actions. Level is calculated from your total AP on an RPG-style curve — reach milestone levels for a small celebration.",
      syncedAs:"Signed in as {email}", signOut:"Sign out", continueBtn:"Continue", syncFillFields:"Enter both email and password.",
      syncActiveNote:"Your data now syncs automatically across your devices while signed in.",
      syncConflictMsg:"This account already has data saved from another device. Which would you like to keep?",
      syncKeepDevice:"Keep this device", syncUseCloud:"Use cloud data", syncUnavailable:"Sync isn't available right now — check your connection.",
      todayLabel:"done today", shortcutsHeader:"KEYBOARD SHORTCUTS", scFocus:"Focus the input", scEsc:"Close dialogs", scUndo:"Undo", scRedo:"Redo",
      scExport:"Export backup", scImport:"Import backup", scStats:"Open Statistics", scTheme:"Toggle theme", monthlyTitle:"MONTHLY FREQUENCY" },

    vi:{ tagline:"việc đã làm — không phải việc đã định", level:"CẤP", ap:"AP", streak:"ngày liên tiếp",
      stats:"Thống kê", todo:"Việc cần làm", hint:"Không áp lực, chỉ có tiến bộ. Hôm nay bạn đã hoàn thành gì?",
      tabOverview:"Tổng quan", tabHistory:"Lịch sử", tabDaily:"Theo ngày", statsTitle:"THỐNG KÊ",
      overviewEmpty:"Kho trống. Gõ /add <việc> để bắt đầu ghi nhận.",
      overviewSummary:"{count} việc đang theo dõi · {ap} AP",
      colTask:"Việc", colCount:"Số lần", colTotalAp:"Tổng AP", colDate:"Ngày", colTime:"Giờ", colAp:"AP",
      searchPlaceholder:"Tìm theo tên việc…", clearFilters:"Xóa bộ lọc", noMatch:"Không có kết quả phù hợp.",
      dailyEntries:"CÁC MỤC", dailyEmpty:"Không có hành động nào được ghi trong ngày này.", freqTitle:"TẦN SUẤT",
      todoAddPlaceholder:"Thêm một việc…", todoEmpty:"Chưa có gì ở đây. Thêm việc đầu tiên ở trên.",
      diffEasy:"Dễ", diffNormal:"Bình thường", diffHard:"Khó",
      tabSync:"Đồng bộ", tabAchievements:"Thành tích", tabLanguage:"Ngôn ngữ",
      syncIntro:"Kết nối tài khoản để đồng bộ dữ liệu qua nhiều thiết bị.",
      syncSoon:"Đồng bộ đám mây sẽ có trong bản cập nhật sau. Hiện tại, hãy dùng Export / Import để chuyển dữ liệu giữa các thiết bị.",
      syncGoogle:"Tiếp tục với Google", syncGithub:"Tiếp tục với GitHub", syncApple:"Tiếp tục với Apple", syncEmail:"Tiếp tục với Email",
      achIntro:"Đạt các cấp này để mở khóa.", achLocked:"Đã khóa",
      langIntro:"Chọn ngôn ngữ. Mọi thứ sẽ đổi theo — mọi màn hình, mọi thông báo.",
      soundLabel:"Âm thanh", vibLabel:"Rung", volLabel:"Âm lượng", close:"Đóng",
      bootMsg:"Phiên làm việc bắt đầu — Acta v4.0", philMsg:"Triết lý: việc đã làm, không phải việc đã định. Không lịch trình, chỉ ghi nhận.",
      helpMsg:"Gõ /help để xem danh sách lệnh, hoặc gõ thẳng việc bạn đã làm.", helpHeader:"DANH SÁCH LỆNH",
      unknownCmd:"Lệnh không tồn tại: \"{cmd}\". Gõ /help để xem danh sách lệnh.",
      addUsage:"Cú pháp: /add <việc>", addInvalid:"Tên việc không hợp lệ.",
      addExisting:"+1 AP — \"{task}\" (lần thứ {count})", addNew:"Đã ghi nhận việc mới: \"{task}\" (+1 AP)",
      delUsage:"Cú pháp: /del <việc>", delOk:"Đã xóa \"{task}\" khỏi kho.", delNotFound:"Không tìm thấy \"{task}\" trong kho.",
      clearedMsg:"Đã dọn màn hình. Dữ liệu vẫn được giữ nguyên.", exportedMsg:"Đã tải file backup.",
      importedMsg:"Đã nhập dữ liệu từ \"{file}\".", importFailed:"Nhập thất bại: file không đúng định dạng JSON.", importReadFail:"Nhập thất bại: không đọc được file.",
      undidMsg:"Đã hoàn tác thao tác vừa rồi.", redidMsg:"Đã làm lại thao tác vừa hoàn tác.",
      todoDoneMsg:"Đã hoàn thành \"{task}\" (+{ap} AP) · Việc cần làm", levelUp:"Lên cấp {level}!", nicedBtn:"Tuyệt!", account:"Tài khoản",
      cmdAdd:"Ghi nhận 1 hành động. Việc cũ +AP và tăng số lần; việc mới tự đăng ký.",
      cmdDel:"Xóa một việc khỏi kho.", cmdList:"Mở Thống kê.", cmdExport:"Tải file backup dữ liệu dạng JSON.",
      cmdImport:"Nhập dữ liệu từ file backup JSON.", cmdUndo:"Hoàn tác thao tác gần nhất.", cmdRedo:"Làm lại thao tác vừa hoàn tác.",
      cmdTheme:"Chuyển đổi giao diện sáng / tối.", cmdClear:"Dọn màn hình. Dữ liệu vẫn được giữ.", cmdHelp:"Hiện lại danh sách lệnh.",
      dataLabel:"Dữ liệu", eraseData:"Xóa toàn bộ dữ liệu", eraseConfirmMsg:"Thao tác này sẽ xóa vĩnh viễn toàn bộ AP, việc, lịch sử và việc cần làm của bạn. Không thể hoàn tác.",
      erasedMsg:"Đã xóa toàn bộ dữ liệu.", cancelBtn:"Hủy", confirmBtn:"Xóa", restoreHint:"Dùng Import để khôi phục từ bản backup.",
      apTooltip:"AP = Acta Point, nhận được khi hoàn thành hành động. Cấp độ được tính từ tổng AP theo đường cong kiểu RPG — đạt các mốc cấp độ để có một khoảnh khắc ăn mừng nhỏ.",
      syncedAs:"Đã đăng nhập với {email}", signOut:"Đăng xuất", continueBtn:"Tiếp tục", syncFillFields:"Vui lòng nhập cả email và mật khẩu.",
      syncActiveNote:"Dữ liệu của bạn giờ sẽ tự động đồng bộ qua các thiết bị khi đã đăng nhập.",
      syncConflictMsg:"Tài khoản này đã có dữ liệu lưu từ thiết bị khác. Bạn muốn giữ bên nào?",
      syncKeepDevice:"Giữ thiết bị này", syncUseCloud:"Dùng dữ liệu đám mây", syncUnavailable:"Đồng bộ hiện không khả dụng — kiểm tra kết nối mạng.",
      todayLabel:"hoàn thành hôm nay", shortcutsHeader:"PHÍM TẮT", scFocus:"Focus vào ô nhập", scEsc:"Đóng hộp thoại", scUndo:"Hoàn tác", scRedo:"Làm lại",
      scExport:"Xuất backup", scImport:"Nhập backup", scStats:"Mở Thống kê", scTheme:"Đổi giao diện", monthlyTitle:"TẦN SUẤT THEO THÁNG" },

    es:{ tagline:"cosas hechas — no cosas planeadas", level:"NIVEL", ap:"PA", streak:"días seguidos",
      stats:"Estadísticas", todo:"Tareas", hint:"Sin presión, solo progreso. ¿Qué lograste hoy?",
      tabOverview:"Resumen", tabHistory:"Historial", tabDaily:"Diario", statsTitle:"ESTADÍSTICAS",
      overviewEmpty:"El repositorio está vacío. Escribe /add <tarea> para empezar.",
      overviewSummary:"{count} tarea(s) registradas · {ap} PA en total",
      colTask:"Tarea", colCount:"Veces", colTotalAp:"PA total", colDate:"Fecha", colTime:"Hora", colAp:"PA",
      searchPlaceholder:"Buscar por nombre de tarea…", clearFilters:"Limpiar filtros", noMatch:"Ningún resultado coincide.",
      dailyEntries:"ENTRADAS", dailyEmpty:"No se registraron acciones este día.", freqTitle:"FRECUENCIA",
      todoAddPlaceholder:"Añadir una tarea…", todoEmpty:"Nada por aquí todavía. Añade tu primera tarea arriba.",
      diffEasy:"Fácil", diffNormal:"Normal", diffHard:"Difícil",
      tabSync:"Sincronizar", tabAchievements:"Logros", tabLanguage:"Idioma",
      syncIntro:"Conecta una cuenta para sincronizar tus datos entre dispositivos.",
      syncSoon:"La sincronización en la nube llegará en una futura actualización. Por ahora, usa Exportar / Importar.",
      syncGoogle:"Continuar con Google", syncGithub:"Continuar con GitHub", syncApple:"Continuar con Apple", syncEmail:"Continuar con Email",
      achIntro:"Alcanza estos niveles para desbloquearlos.", achLocked:"Bloqueado",
      langIntro:"Elige tu idioma. Todo cambia — cada pantalla, cada mensaje.",
      soundLabel:"Sonido", vibLabel:"Vibración", volLabel:"Volumen", close:"Cerrar",
      bootMsg:"Sesión iniciada — Acta v4.0", philMsg:"Filosofía: cosas hechas, no cosas planeadas. Sin horarios, solo reconocimiento.",
      helpMsg:"Escribe /help para ver los comandos, o simplemente escribe lo que hiciste.", helpHeader:"LISTA DE COMANDOS",
      unknownCmd:"Comando desconocido: \"{cmd}\". Escribe /help para ver la lista.",
      addUsage:"Uso: /add <tarea>", addInvalid:"Ese nombre de tarea no es válido.",
      addExisting:"+1 PA — \"{task}\" (vez #{count})", addNew:"Nueva tarea registrada: \"{task}\" (+1 PA)",
      delUsage:"Uso: /del <tarea>", delOk:"Se eliminó \"{task}\" del repositorio.", delNotFound:"No se encontró \"{task}\" en el repositorio.",
      clearedMsg:"Pantalla despejada. Tus datos están intactos.", exportedMsg:"Archivo de backup descargado.",
      importedMsg:"Datos importados desde \"{file}\".", importFailed:"Error al importar: el archivo no es JSON válido.", importReadFail:"Error al importar: no se pudo leer el archivo.",
      undidMsg:"Se deshizo la última acción.", redidMsg:"Se rehizo la última acción deshecha.",
      todoDoneMsg:"Completado \"{task}\" (+{ap} PA) · Tareas", levelUp:"¡Nivel {level}!", nicedBtn:"¡Genial!", account:"Cuenta",
      cmdAdd:"Registra una acción. Tarea existente: +PA y +1 al contador; una nueva se registra sola.",
      cmdDel:"Elimina una tarea del repositorio.", cmdList:"Abre Estadísticas.", cmdExport:"Descarga un backup de tus datos en JSON.",
      cmdImport:"Carga datos desde un archivo de backup JSON.", cmdUndo:"Deshace la última acción.", cmdRedo:"Rehace la última acción deshecha.",
      cmdTheme:"Alterna entre tema claro y oscuro.", cmdClear:"Limpia la pantalla. Tus datos se conservan.", cmdHelp:"Muestra esta lista de nuevo.",
      dataLabel:"Datos", eraseData:"Borrar todos los datos", eraseConfirmMsg:"Esto eliminará permanentemente todo tu AP, tareas, historial y lista de tareas. No se puede deshacer.",
      erasedMsg:"Todos los datos han sido borrados.", cancelBtn:"Cancelar", confirmBtn:"Borrar", restoreHint:"Usa Importar para restaurar desde un backup.",
      apTooltip:"PA = Acta Point, se gana completando acciones. El nivel se calcula a partir del total de PA con una curva estilo RPG — alcanza niveles hito para una pequeña celebración.",
      syncedAs:"Sesión iniciada como {email}", signOut:"Cerrar sesión", continueBtn:"Continuar", syncFillFields:"Introduce el email y la contraseña.",
      syncActiveNote:"Tus datos ahora se sincronizan automáticamente entre tus dispositivos mientras tengas la sesión iniciada.",
      syncConflictMsg:"Esta cuenta ya tiene datos guardados de otro dispositivo. ¿Cuál quieres conservar?",
      syncKeepDevice:"Conservar este dispositivo", syncUseCloud:"Usar datos de la nube", syncUnavailable:"La sincronización no está disponible ahora — revisa tu conexión.",
      todayLabel:"hechas hoy", shortcutsHeader:"ATAJOS DE TECLADO", scFocus:"Enfocar el campo de entrada", scEsc:"Cerrar diálogos", scUndo:"Deshacer", scRedo:"Rehacer",
      scExport:"Exportar backup", scImport:"Importar backup", scStats:"Abrir Estadísticas", scTheme:"Cambiar tema", monthlyTitle:"FRECUENCIA MENSUAL" },

    fr:{ tagline:"des choses faites — pas des choses prévues", level:"NIVEAU", ap:"PA", streak:"jours de suite",
      stats:"Statistiques", todo:"À faire", hint:"Sans pression, juste du progrès. Qu'avez-vous accompli aujourd'hui ?",
      tabOverview:"Aperçu", tabHistory:"Historique", tabDaily:"Journalier", statsTitle:"STATISTIQUES",
      overviewEmpty:"Le dépôt est vide. Tapez /add <tâche> pour commencer.",
      overviewSummary:"{count} tâche(s) suivie(s) · {ap} PA au total",
      colTask:"Tâche", colCount:"Occurrences", colTotalAp:"PA total", colDate:"Date", colTime:"Heure", colAp:"PA",
      searchPlaceholder:"Rechercher une tâche…", clearFilters:"Réinitialiser", noMatch:"Aucun résultat.",
      dailyEntries:"ENTRÉES", dailyEmpty:"Aucune action enregistrée ce jour-là.", freqTitle:"FRÉQUENCE",
      todoAddPlaceholder:"Ajouter une tâche…", todoEmpty:"Rien ici pour l'instant. Ajoutez votre première tâche ci-dessus.",
      diffEasy:"Facile", diffNormal:"Normal", diffHard:"Difficile",
      tabSync:"Synchro", tabAchievements:"Succès", tabLanguage:"Langue",
      syncIntro:"Connectez un compte pour synchroniser vos données entre appareils.",
      syncSoon:"La synchronisation cloud arrive dans une prochaine mise à jour. Utilisez Exporter / Importer pour l'instant.",
      syncGoogle:"Continuer avec Google", syncGithub:"Continuer avec GitHub", syncApple:"Continuer avec Apple", syncEmail:"Continuer avec Email",
      achIntro:"Atteignez ces niveaux pour les débloquer.", achLocked:"Verrouillé",
      langIntro:"Choisissez votre langue. Tout change — chaque écran, chaque message.",
      soundLabel:"Son", vibLabel:"Vibration", volLabel:"Volume", close:"Fermer",
      bootMsg:"Session démarrée — Acta v4.0", philMsg:"Philosophie : des choses faites, pas des choses prévues. Pas d'horaire, juste de la reconnaissance.",
      helpMsg:"Tapez /help pour la liste des commandes, ou tapez simplement ce que vous avez fait.", helpHeader:"LISTE DES COMMANDES",
      unknownCmd:"Commande inconnue : \"{cmd}\". Tapez /help pour la liste.",
      addUsage:"Usage : /add <tâche>", addInvalid:"Ce nom de tâche n'est pas valide.",
      addExisting:"+1 PA — \"{task}\" (occurrence n°{count})", addNew:"Nouvelle tâche enregistrée : \"{task}\" (+1 PA)",
      delUsage:"Usage : /del <tâche>", delOk:"\"{task}\" a été retirée du dépôt.", delNotFound:"\"{task}\" est introuvable dans le dépôt.",
      clearedMsg:"Écran nettoyé. Vos données sont intactes.", exportedMsg:"Fichier de sauvegarde téléchargé.",
      importedMsg:"Données importées depuis \"{file}\".", importFailed:"Échec de l'import : fichier JSON invalide.", importReadFail:"Échec de l'import : lecture du fichier impossible.",
      undidMsg:"Dernière action annulée.", redidMsg:"Dernière annulation rétablie.",
      todoDoneMsg:"Terminé \"{task}\" (+{ap} PA) · À faire", levelUp:"Niveau {level} !", nicedBtn:"Super !", account:"Compte",
      cmdAdd:"Enregistre une action. Tâche existante : +PA et +1 occurrence ; une nouvelle s'enregistre automatiquement.",
      cmdDel:"Retire une tâche du dépôt.", cmdList:"Ouvre les Statistiques.", cmdExport:"Télécharge une sauvegarde JSON de vos données.",
      cmdImport:"Charge des données depuis un fichier de sauvegarde JSON.", cmdUndo:"Annule la dernière action.", cmdRedo:"Rétablit la dernière annulation.",
      cmdTheme:"Bascule entre thème clair et sombre.", cmdClear:"Nettoie l'écran. Vos données sont conservées.", cmdHelp:"Réaffiche cette liste.",
      dataLabel:"Données", eraseData:"Effacer toutes les données", eraseConfirmMsg:"Cela supprimera définitivement tous vos PA, tâches, historique et to-do. Action irréversible.",
      erasedMsg:"Toutes les données ont été effacées.", cancelBtn:"Annuler", confirmBtn:"Effacer", restoreHint:"Utilisez Importer pour restaurer depuis une sauvegarde.",
      apTooltip:"PA = Acta Point, gagné en accomplissant des actions. Le niveau est calculé à partir du total de PA selon une courbe façon RPG — atteignez des niveaux jalons pour une petite célébration.",
      syncedAs:"Connecté en tant que {email}", signOut:"Se déconnecter", continueBtn:"Continuer", syncFillFields:"Renseignez l'email et le mot de passe.",
      syncActiveNote:"Vos données se synchronisent désormais automatiquement entre vos appareils tant que vous êtes connecté.",
      syncConflictMsg:"Ce compte a déjà des données enregistrées depuis un autre appareil. Lesquelles voulez-vous garder ?",
      syncKeepDevice:"Garder cet appareil", syncUseCloud:"Utiliser les données du cloud", syncUnavailable:"La synchronisation n'est pas disponible pour le moment — vérifiez votre connexion.",
      todayLabel:"faites aujourd'hui", shortcutsHeader:"RACCOURCIS CLAVIER", scFocus:"Focaliser la saisie", scEsc:"Fermer les dialogues", scUndo:"Annuler", scRedo:"Rétablir",
      scExport:"Exporter la sauvegarde", scImport:"Importer une sauvegarde", scStats:"Ouvrir les Statistiques", scTheme:"Changer de thème", monthlyTitle:"FRÉQUENCE MENSUELLE" },

    de:{ tagline:"Erledigtes — kein Geplantes", level:"STUFE", ap:"AP", streak:"Tage in Folge",
      stats:"Statistik", todo:"Aufgaben", hint:"Kein Druck, nur Fortschritt. Was hast du heute geschafft?",
      tabOverview:"Übersicht", tabHistory:"Verlauf", tabDaily:"Täglich", statsTitle:"STATISTIK",
      overviewEmpty:"Das Verzeichnis ist leer. Tippe /add <Aufgabe>, um zu starten.",
      overviewSummary:"{count} erfasste Aufgabe(n) · {ap} AP insgesamt",
      colTask:"Aufgabe", colCount:"Anzahl", colTotalAp:"AP gesamt", colDate:"Datum", colTime:"Zeit", colAp:"AP",
      searchPlaceholder:"Nach Aufgabenname suchen…", clearFilters:"Filter zurücksetzen", noMatch:"Keine Treffer.",
      dailyEntries:"EINTRÄGE", dailyEmpty:"An diesem Tag wurden keine Aktionen erfasst.", freqTitle:"HÄUFIGKEIT",
      todoAddPlaceholder:"Aufgabe hinzufügen…", todoEmpty:"Noch nichts hier. Füge oben deine erste Aufgabe hinzu.",
      diffEasy:"Leicht", diffNormal:"Normal", diffHard:"Schwer",
      tabSync:"Sync", tabAchievements:"Erfolge", tabLanguage:"Sprache",
      syncIntro:"Verbinde ein Konto, um Daten geräteübergreifend zu synchronisieren.",
      syncSoon:"Cloud-Sync kommt in einem zukünftigen Update. Nutze bis dahin Export / Import.",
      syncGoogle:"Weiter mit Google", syncGithub:"Weiter mit GitHub", syncApple:"Weiter mit Apple", syncEmail:"Weiter mit E-Mail",
      achIntro:"Erreiche diese Stufen, um sie freizuschalten.", achLocked:"Gesperrt",
      langIntro:"Wähle deine Sprache. Alles wechselt — jeder Bildschirm, jede Nachricht.",
      soundLabel:"Ton", vibLabel:"Vibration", volLabel:"Lautstärke", close:"Schließen",
      bootMsg:"Sitzung gestartet — Acta v4.0", philMsg:"Philosophie: Erledigtes zählt, nicht Geplantes. Kein Zeitplan, nur Anerkennung.",
      helpMsg:"Tippe /help für die Befehlsliste, oder schreib einfach, was du getan hast.", helpHeader:"BEFEHLSLISTE",
      unknownCmd:"Unbekannter Befehl: \"{cmd}\". Tippe /help für die Liste.",
      addUsage:"Verwendung: /add <Aufgabe>", addInvalid:"Dieser Aufgabenname ist ungültig.",
      addExisting:"+1 AP — \"{task}\" (#{count})", addNew:"Neue Aufgabe registriert: \"{task}\" (+1 AP)",
      delUsage:"Verwendung: /del <Aufgabe>", delOk:"\"{task}\" wurde entfernt.", delNotFound:"\"{task}\" wurde nicht gefunden.",
      clearedMsg:"Bildschirm geleert. Deine Daten bleiben erhalten.", exportedMsg:"Backup-Datei heruntergeladen.",
      importedMsg:"Daten aus \"{file}\" importiert.", importFailed:"Import fehlgeschlagen: ungültige JSON-Datei.", importReadFail:"Import fehlgeschlagen: Datei konnte nicht gelesen werden.",
      undidMsg:"Letzte Aktion rückgängig gemacht.", redidMsg:"Letzte rückgängig gemachte Aktion wiederholt.",
      todoDoneMsg:"\"{task}\" erledigt (+{ap} AP) · Aufgaben", levelUp:"Stufe {level}!", nicedBtn:"Super!", account:"Konto",
      cmdAdd:"Erfasst eine Aktion. Bestehende Aufgabe: +AP und Zähler +1; neue registriert sich automatisch.",
      cmdDel:"Entfernt eine Aufgabe.", cmdList:"Öffnet die Statistik.", cmdExport:"Lädt ein JSON-Backup deiner Daten herunter.",
      cmdImport:"Lädt Daten aus einer JSON-Backup-Datei.", cmdUndo:"Macht die letzte Aktion rückgängig.", cmdRedo:"Stellt die letzte rückgängig gemachte Aktion wieder her.",
      cmdTheme:"Wechselt zwischen hellem und dunklem Design.", cmdClear:"Leert den Bildschirm. Deine Daten bleiben erhalten.", cmdHelp:"Zeigt diese Liste erneut.",
      dataLabel:"Daten", eraseData:"Alle Daten löschen", eraseConfirmMsg:"Dadurch werden alle deine AP, Aufgaben, dein Verlauf und deine To-Dos dauerhaft gelöscht. Das kann nicht rückgängig gemacht werden.",
      erasedMsg:"Alle Daten wurden gelöscht.", cancelBtn:"Abbrechen", confirmBtn:"Löschen", restoreHint:"Nutze Import, um aus einem Backup wiederherzustellen.",
      apTooltip:"AP = Acta Point, erhalten durch abgeschlossene Aktionen. Die Stufe wird aus deinem gesamten AP nach einer RPG-artigen Kurve berechnet — erreiche Meilenstein-Stufen für eine kleine Feier.",
      syncedAs:"Angemeldet als {email}", signOut:"Abmelden", continueBtn:"Weiter", syncFillFields:"Bitte E-Mail und Passwort eingeben.",
      syncActiveNote:"Deine Daten werden jetzt automatisch zwischen deinen Geräten synchronisiert, solange du angemeldet bist.",
      syncConflictMsg:"Dieses Konto hat bereits gespeicherte Daten von einem anderen Gerät. Welche möchtest du behalten?",
      syncKeepDevice:"Dieses Gerät behalten", syncUseCloud:"Cloud-Daten verwenden", syncUnavailable:"Synchronisierung ist gerade nicht verfügbar — überprüfe deine Verbindung.",
      todayLabel:"heute erledigt", shortcutsHeader:"TASTENKÜRZEL", scFocus:"Eingabe fokussieren", scEsc:"Dialoge schließen", scUndo:"Rückgängig", scRedo:"Wiederholen",
      scExport:"Backup exportieren", scImport:"Backup importieren", scStats:"Statistik öffnen", scTheme:"Design wechseln", monthlyTitle:"MONATLICHE HÄUFIGKEIT" },

    pt:{ tagline:"coisas feitas — não coisas planejadas", level:"NÍVEL", ap:"PA", streak:"dias seguidos",
      stats:"Estatísticas", todo:"Tarefas", hint:"Sem pressão, só progresso. O que você concluiu hoje?",
      tabOverview:"Visão geral", tabHistory:"Histórico", tabDaily:"Diário", statsTitle:"ESTATÍSTICAS",
      overviewEmpty:"O repositório está vazio. Digite /add <tarefa> para começar.",
      overviewSummary:"{count} tarefa(s) monitorada(s) · {ap} PA no total",
      colTask:"Tarefa", colCount:"Vezes", colTotalAp:"PA total", colDate:"Data", colTime:"Hora", colAp:"PA",
      searchPlaceholder:"Buscar por nome da tarefa…", clearFilters:"Limpar filtros", noMatch:"Nenhum resultado encontrado.",
      dailyEntries:"REGISTROS", dailyEmpty:"Nenhuma ação registrada neste dia.", freqTitle:"FREQUÊNCIA",
      todoAddPlaceholder:"Adicionar uma tarefa…", todoEmpty:"Nada por aqui ainda. Adicione sua primeira tarefa acima.",
      diffEasy:"Fácil", diffNormal:"Normal", diffHard:"Difícil",
      tabSync:"Sincronizar", tabAchievements:"Conquistas", tabLanguage:"Idioma",
      syncIntro:"Conecte uma conta para sincronizar seus dados entre dispositivos.",
      syncSoon:"A sincronização em nuvem chega em uma atualização futura. Por enquanto, use Exportar / Importar.",
      syncGoogle:"Continuar com Google", syncGithub:"Continuar com GitHub", syncApple:"Continuar com Apple", syncEmail:"Continuar com Email",
      achIntro:"Alcance esses níveis para desbloqueá-los.", achLocked:"Bloqueado",
      langIntro:"Escolha seu idioma. Tudo muda — cada tela, cada mensagem.",
      soundLabel:"Som", vibLabel:"Vibração", volLabel:"Volume", close:"Fechar",
      bootMsg:"Sessão iniciada — Acta v4.0", philMsg:"Filosofia: coisas feitas, não coisas planejadas. Sem agenda, só reconhecimento.",
      helpMsg:"Digite /help para a lista de comandos, ou apenas digite o que você fez.", helpHeader:"LISTA DE COMANDOS",
      unknownCmd:"Comando desconhecido: \"{cmd}\". Digite /help para a lista.",
      addUsage:"Uso: /add <tarefa>", addInvalid:"Esse nome de tarefa não é válido.",
      addExisting:"+1 PA — \"{task}\" (vez #{count})", addNew:"Nova tarefa registrada: \"{task}\" (+1 PA)",
      delUsage:"Uso: /del <tarefa>", delOk:"\"{task}\" foi removida do repositório.", delNotFound:"\"{task}\" não foi encontrada no repositório.",
      clearedMsg:"Tela limpa. Seus dados estão intactos.", exportedMsg:"Arquivo de backup baixado.",
      importedMsg:"Dados importados de \"{file}\".", importFailed:"Falha na importação: arquivo JSON inválido.", importReadFail:"Falha na importação: não foi possível ler o arquivo.",
      undidMsg:"Última ação desfeita.", redidMsg:"Última ação desfeita foi refeita.",
      todoDoneMsg:"Concluído \"{task}\" (+{ap} PA) · Tarefas", levelUp:"Nível {level}!", nicedBtn:"Ótimo!", account:"Conta",
      cmdAdd:"Registra uma ação. Tarefa existente: +PA e +1 na contagem; uma nova se registra sozinha.",
      cmdDel:"Remove uma tarefa do repositório.", cmdList:"Abre as Estatísticas.", cmdExport:"Baixa um backup dos seus dados em JSON.",
      cmdImport:"Carrega dados de um arquivo de backup JSON.", cmdUndo:"Desfaz a última ação.", cmdRedo:"Refaz a última ação desfeita.",
      cmdTheme:"Alterna entre tema claro e escuro.", cmdClear:"Limpa a tela. Seus dados são mantidos.", cmdHelp:"Mostra esta lista novamente.",
      dataLabel:"Dados", eraseData:"Apagar todos os dados", eraseConfirmMsg:"Isso vai apagar permanentemente todos os seus PA, tarefas, histórico e lista de tarefas. Não pode ser desfeito.",
      erasedMsg:"Todos os dados foram apagados.", cancelBtn:"Cancelar", confirmBtn:"Apagar", restoreHint:"Use Importar para restaurar a partir de um backup.",
      apTooltip:"PA = Acta Point, obtido ao concluir ações. O nível é calculado a partir do total de PA numa curva estilo RPG — alcance níveis marco para uma pequena celebração.",
      syncedAs:"Sessão iniciada como {email}", signOut:"Sair", continueBtn:"Continuar", syncFillFields:"Preencha o email e a senha.",
      syncActiveNote:"Seus dados agora sincronizam automaticamente entre seus dispositivos enquanto você estiver conectado.",
      syncConflictMsg:"Esta conta já tem dados salvos de outro dispositivo. Qual você quer manter?",
      syncKeepDevice:"Manter este dispositivo", syncUseCloud:"Usar dados da nuvem", syncUnavailable:"A sincronização não está disponível agora — verifique sua conexão.",
      todayLabel:"feitas hoje", shortcutsHeader:"ATALHOS DE TECLADO", scFocus:"Focar no campo de entrada", scEsc:"Fechar diálogos", scUndo:"Desfazer", scRedo:"Refazer",
      scExport:"Exportar backup", scImport:"Importar backup", scStats:"Abrir Estatísticas", scTheme:"Alternar tema", monthlyTitle:"FREQUÊNCIA MENSAL" },

    ja:{ tagline:"やったこと ― 予定ではなく", level:"レベル", ap:"AP", streak:"連続日数",
      stats:"統計", todo:"To-Do", hint:"プレッシャーはいらない、前進あるのみ。今日何を達成しましたか？",
      tabOverview:"概要", tabHistory:"履歴", tabDaily:"日別", statsTitle:"統計",
      overviewEmpty:"リポジトリは空です。/add <タスク> と入力して記録を始めましょう。",
      overviewSummary:"記録中のタスク {count} 件 · 合計 {ap} AP",
      colTask:"タスク", colCount:"回数", colTotalAp:"合計AP", colDate:"日付", colTime:"時刻", colAp:"AP",
      searchPlaceholder:"タスク名で検索…", clearFilters:"フィルターを解除", noMatch:"該当する記録がありません。",
      dailyEntries:"記録一覧", dailyEmpty:"この日の記録はありません。", freqTitle:"頻度",
      todoAddPlaceholder:"タスクを追加…", todoEmpty:"まだ何もありません。上で最初のタスクを追加しましょう。",
      diffEasy:"簡単", diffNormal:"普通", diffHard:"難しい",
      tabSync:"同期", tabAchievements:"実績", tabLanguage:"言語",
      syncIntro:"アカウントを接続してデバイス間でデータを同期します。",
      syncSoon:"クラウド同期は今後のアップデートで提供予定です。それまでは Export / Import をご利用ください。",
      syncGoogle:"Googleで続ける", syncGithub:"GitHubで続ける", syncApple:"Appleで続ける", syncEmail:"メールで続ける",
      achIntro:"これらのレベルに到達すると解放されます。", achLocked:"ロック中",
      langIntro:"言語を選択してください。すべての画面・メッセージが切り替わります。",
      soundLabel:"サウンド", vibLabel:"バイブレーション", volLabel:"音量", close:"閉じる",
      bootMsg:"セッション開始 — Acta v4.0", philMsg:"理念：やったことがすべて、予定は関係ない。スケジュールではなく、認識を。",
      helpMsg:"/help でコマンド一覧を表示、または実行したことをそのまま入力してください。", helpHeader:"コマンド一覧",
      unknownCmd:"不明なコマンド: \"{cmd}\"。/help で一覧を確認してください。",
      addUsage:"使い方: /add <タスク>", addInvalid:"そのタスク名は使用できません。",
      addExisting:"+1 AP — 「{task}」（{count}回目）", addNew:"新しいタスクを登録しました: 「{task}」(+1 AP)",
      delUsage:"使い方: /del <タスク>", delOk:"「{task}」をリポジトリから削除しました。", delNotFound:"「{task}」が見つかりません。",
      clearedMsg:"画面をクリアしました。データはそのまま残っています。", exportedMsg:"バックアップファイルをダウンロードしました。",
      importedMsg:"「{file}」からデータをインポートしました。", importFailed:"インポート失敗：無効なJSONファイルです。", importReadFail:"インポート失敗：ファイルを読み込めませんでした。",
      undidMsg:"直前の操作を取り消しました。", redidMsg:"取り消した操作をやり直しました。",
      todoDoneMsg:"「{task}」を完了しました (+{ap} AP) · To-Do", levelUp:"レベル {level}！", nicedBtn:"いいね！", account:"アカウント",
      cmdAdd:"アクションを記録します。既存タスクはAP加算＆回数+1、新規タスクは自動登録されます。",
      cmdDel:"リポジトリからタスクを削除します。", cmdList:"統計を開きます。", cmdExport:"データのJSONバックアップをダウンロードします。",
      cmdImport:"JSONバックアップファイルからデータを読み込みます。", cmdUndo:"直前の操作を取り消します。", cmdRedo:"取り消した操作をやり直します。",
      cmdTheme:"ライト/ダークテーマを切り替えます。", cmdClear:"画面をクリアします。データは保持されます。", cmdHelp:"このリストを再表示します。",
      dataLabel:"データ", eraseData:"すべてのデータを削除", eraseConfirmMsg:"すべてのAP、タスク、履歴、To-Doが完全に削除されます。元に戻せません。",
      erasedMsg:"すべてのデータを削除しました。", cancelBtn:"キャンセル", confirmBtn:"削除", restoreHint:"バックアップから復元するには Import を使用してください。",
      apTooltip:"AP＝Acta Point。アクションを完了すると獲得できます。レベルはRPG風のカーブで合計APから算出され、節目のレベルに到達すると小さなお祝いがあります。",
      syncedAs:"{email} でログイン中", signOut:"ログアウト", continueBtn:"続ける", syncFillFields:"メールアドレスとパスワードの両方を入力してください。",
      syncActiveNote:"ログイン中は、デバイス間でデータが自動的に同期されます。",
      syncConflictMsg:"このアカウントには別のデバイスから保存されたデータが既にあります。どちらを使用しますか？",
      syncKeepDevice:"この端末を使う", syncUseCloud:"クラウドのデータを使う", syncUnavailable:"現在同期を利用できません。接続を確認してください。",
      todayLabel:"本日完了", shortcutsHeader:"キーボードショートカット", scFocus:"入力欄にフォーカス", scEsc:"ダイアログを閉じる", scUndo:"元に戻す", scRedo:"やり直す",
      scExport:"バックアップを書き出す", scImport:"バックアップを読み込む", scStats:"統計を開く", scTheme:"テーマ切替", monthlyTitle:"月別頻度" },

    ko:{ tagline:"해낸 일 — 계획한 일이 아니라", level:"레벨", ap:"AP", streak:"일 연속",
      stats:"통계", todo:"할 일", hint:"부담 갖지 마세요, 그저 나아가면 됩니다. 오늘 무엇을 해냈나요?",
      tabOverview:"개요", tabHistory:"기록", tabDaily:"일별", statsTitle:"통계",
      overviewEmpty:"저장소가 비어 있습니다. /add <작업> 을 입력해 기록을 시작하세요.",
      overviewSummary:"추적 중인 작업 {count}개 · 총 {ap} AP",
      colTask:"작업", colCount:"횟수", colTotalAp:"총 AP", colDate:"날짜", colTime:"시간", colAp:"AP",
      searchPlaceholder:"작업 이름으로 검색…", clearFilters:"필터 지우기", noMatch:"일치하는 항목이 없습니다.",
      dailyEntries:"기록", dailyEmpty:"이 날에는 기록된 작업이 없습니다.", freqTitle:"빈도",
      todoAddPlaceholder:"작업 추가…", todoEmpty:"아직 아무것도 없어요. 위에서 첫 작업을 추가해보세요.",
      diffEasy:"쉬움", diffNormal:"보통", diffHard:"어려움",
      tabSync:"동기화", tabAchievements:"업적", tabLanguage:"언어",
      syncIntro:"계정을 연결해 여러 기기에서 데이터를 동기화하세요.",
      syncSoon:"클라우드 동기화는 추후 업데이트에서 제공됩니다. 지금은 Export / Import를 이용해주세요.",
      syncGoogle:"Google로 계속하기", syncGithub:"GitHub로 계속하기", syncApple:"Apple로 계속하기", syncEmail:"이메일로 계속하기",
      achIntro:"이 레벨에 도달하면 잠금이 해제됩니다.", achLocked:"잠김",
      langIntro:"언어를 선택하세요. 모든 화면과 메시지가 바뀝니다.",
      soundLabel:"소리", vibLabel:"진동", volLabel:"음량", close:"닫기",
      bootMsg:"세션 시작 — Acta v4.0", philMsg:"철학: 계획이 아니라 실행. 일정 대신 인정을.",
      helpMsg:"/help로 명령어 목록을 보거나, 방금 한 일을 그대로 입력하세요.", helpHeader:"명령어 목록",
      unknownCmd:"알 수 없는 명령어: \"{cmd}\". /help로 목록을 확인하세요.",
      addUsage:"사용법: /add <작업>", addInvalid:"유효하지 않은 작업 이름입니다.",
      addExisting:"+1 AP — \"{task}\" ({count}번째)", addNew:"새 작업 등록됨: \"{task}\" (+1 AP)",
      delUsage:"사용법: /del <작업>", delOk:"\"{task}\"을(를) 저장소에서 삭제했습니다.", delNotFound:"\"{task}\"을(를) 찾을 수 없습니다.",
      clearedMsg:"화면을 지웠습니다. 데이터는 그대로 유지됩니다.", exportedMsg:"백업 파일을 다운로드했습니다.",
      importedMsg:"\"{file}\"에서 데이터를 가져왔습니다.", importFailed:"가져오기 실패: 올바른 JSON 파일이 아닙니다.", importReadFail:"가져오기 실패: 파일을 읽을 수 없습니다.",
      undidMsg:"마지막 작업을 취소했습니다.", redidMsg:"취소한 작업을 다시 실행했습니다.",
      todoDoneMsg:"\"{task}\" 완료 (+{ap} AP) · 할 일", levelUp:"레벨 {level}!", nicedBtn:"좋아요!", account:"계정",
      cmdAdd:"작업을 기록합니다. 기존 작업은 AP 추가 및 횟수 +1, 새 작업은 자동 등록됩니다.",
      cmdDel:"저장소에서 작업을 삭제합니다.", cmdList:"통계를 엽니다.", cmdExport:"데이터를 JSON 백업으로 다운로드합니다.",
      cmdImport:"JSON 백업 파일에서 데이터를 불러옵니다.", cmdUndo:"마지막 작업을 취소합니다.", cmdRedo:"취소한 작업을 다시 실행합니다.",
      cmdTheme:"라이트/다크 테마를 전환합니다.", cmdClear:"화면을 지웁니다. 데이터는 유지됩니다.", cmdHelp:"이 목록을 다시 표시합니다.",
      dataLabel:"데이터", eraseData:"모든 데이터 삭제", eraseConfirmMsg:"모든 AP, 작업, 기록, 할 일이 영구적으로 삭제됩니다. 되돌릴 수 없습니다.",
      erasedMsg:"모든 데이터가 삭제되었습니다.", cancelBtn:"취소", confirmBtn:"삭제", restoreHint:"백업에서 복원하려면 Import를 사용하세요.",
      apTooltip:"AP = Acta Point, 행동을 완료하면 획득합니다. 레벨은 총 AP를 기반으로 RPG 스타일 곡선으로 계산되며, 마일스톤 레벨에 도달하면 작은 축하가 있습니다.",
      syncedAs:"{email}(으)로 로그인됨", signOut:"로그아웃", continueBtn:"계속", syncFillFields:"이메일과 비밀번호를 모두 입력하세요.",
      syncActiveNote:"로그인 상태에서는 기기 간 데이터가 자동으로 동기화됩니다.",
      syncConflictMsg:"이 계정에는 다른 기기에서 저장된 데이터가 이미 있습니다. 어느 쪽을 유지하시겠습니까?",
      syncKeepDevice:"이 기기 유지", syncUseCloud:"클라우드 데이터 사용", syncUnavailable:"지금은 동기화를 사용할 수 없습니다 — 연결 상태를 확인하세요.",
      todayLabel:"오늘 완료", shortcutsHeader:"키보드 단축키", scFocus:"입력창 포커스", scEsc:"대화상자 닫기", scUndo:"실행 취소", scRedo:"다시 실행",
      scExport:"백업 내보내기", scImport:"백업 가져오기", scStats:"통계 열기", scTheme:"테마 전환", monthlyTitle:"월별 빈도" },

    zh:{ tagline:"已完成的事 — 而非计划中的事", level:"等级", ap:"AP", streak:"天连续",
      stats:"统计", todo:"待办", hint:"不必有压力，只管前进。你今天完成了什么？",
      tabOverview:"概览", tabHistory:"历史记录", tabDaily:"每日", statsTitle:"统计",
      overviewEmpty:"仓库是空的。输入 /add <任务> 开始记录。",
      overviewSummary:"已跟踪 {count} 个任务 · 共 {ap} AP",
      colTask:"任务", colCount:"次数", colTotalAp:"总AP", colDate:"日期", colTime:"时间", colAp:"AP",
      searchPlaceholder:"按任务名称搜索…", clearFilters:"清除筛选", noMatch:"没有匹配的记录。",
      dailyEntries:"记录", dailyEmpty:"这一天没有记录任何操作。", freqTitle:"频率",
      todoAddPlaceholder:"添加一项任务…", todoEmpty:"这里还没有内容，请在上方添加第一项任务。",
      diffEasy:"简单", diffNormal:"普通", diffHard:"困难",
      tabSync:"同步", tabAchievements:"成就", tabLanguage:"语言",
      syncIntro:"连接账号以在多台设备间同步数据。",
      syncSoon:"云同步将在未来更新中推出。目前请使用 导出/导入 在设备间转移数据。",
      syncGoogle:"使用 Google 继续", syncGithub:"使用 GitHub 继续", syncApple:"使用 Apple 继续", syncEmail:"使用邮箱继续",
      achIntro:"达到这些等级即可解锁。", achLocked:"未解锁",
      langIntro:"选择你的语言。所有内容都会切换——每个界面、每条消息。",
      soundLabel:"声音", vibLabel:"震动", volLabel:"音量", close:"关闭",
      bootMsg:"会话已开始 — Acta v4.0", philMsg:"理念：重要的是已完成的事，而非计划的事。不需要日程，只需要认可。",
      helpMsg:"输入 /help 查看命令列表，或直接输入你做了什么。", helpHeader:"命令列表",
      unknownCmd:"未知命令：“{cmd}”。输入 /help 查看列表。",
      addUsage:"用法：/add <任务>", addInvalid:"该任务名称无效。",
      addExisting:"+1 AP — “{task}”（第{count}次）", addNew:"已注册新任务：“{task}”（+1 AP）",
      delUsage:"用法：/del <任务>", delOk:"已从仓库中删除“{task}”。", delNotFound:"在仓库中未找到“{task}”。",
      clearedMsg:"屏幕已清空，数据未受影响。", exportedMsg:"备份文件已下载。",
      importedMsg:"已从“{file}”导入数据。", importFailed:"导入失败：文件不是有效的JSON。", importReadFail:"导入失败：无法读取文件。",
      undidMsg:"已撤销上一步操作。", redidMsg:"已重做被撤销的操作。",
      todoDoneMsg:"已完成“{task}”（+{ap} AP）· 待办", levelUp:"等级 {level}！", nicedBtn:"太棒了！", account:"账户",
      cmdAdd:"记录一次行动。已有任务：+AP 并计数+1；新任务自动注册。",
      cmdDel:"从仓库中删除一个任务。", cmdList:"打开统计。", cmdExport:"下载数据的JSON备份。",
      cmdImport:"从JSON备份文件加载数据。", cmdUndo:"撤销上一步操作。", cmdRedo:"重做被撤销的操作。",
      cmdTheme:"切换浅色/深色主题。", cmdClear:"清空屏幕，数据将被保留。", cmdHelp:"重新显示此列表。",
      dataLabel:"数据", eraseData:"清除所有数据", eraseConfirmMsg:"这将永久删除你所有的AP、任务、历史记录和待办事项，且无法撤销。",
      erasedMsg:"所有数据已清除。", cancelBtn:"取消", confirmBtn:"清除", restoreHint:"使用导入可从备份恢复。",
      apTooltip:"AP＝Acta Point，完成行动即可获得。等级根据总AP按RPG风格曲线计算——达到里程碑等级会有小小的庆祝。",
      syncedAs:"已以 {email} 登录", signOut:"退出登录", continueBtn:"继续", syncFillFields:"请输入邮箱和密码。",
      syncActiveNote:"登录后，你的数据会在各设备间自动同步。",
      syncConflictMsg:"该账户已在其他设备上保存了数据。你想保留哪一份？",
      syncKeepDevice:"保留此设备", syncUseCloud:"使用云端数据", syncUnavailable:"目前无法同步——请检查你的网络连接。",
      todayLabel:"今天完成", shortcutsHeader:"键盘快捷键", scFocus:"聚焦输入框", scEsc:"关闭对话框", scUndo:"撤销", scRedo:"重做",
      scExport:"导出备份", scImport:"导入备份", scStats:"打开统计", scTheme:"切换主题", monthlyTitle:"月度频率" },

    ru:{ tagline:"сделанное — а не запланированное", level:"УРОВЕНЬ", ap:"AP", streak:"дней подряд",
      stats:"Статистика", todo:"Задачи", hint:"Никакого давления, только прогресс. Что вы сделали сегодня?",
      tabOverview:"Обзор", tabHistory:"История", tabDaily:"По дням", statsTitle:"СТАТИСТИКА",
      overviewEmpty:"Репозиторий пуст. Введите /add <задача>, чтобы начать.",
      overviewSummary:"Задач в списке: {count} · всего {ap} AP",
      colTask:"Задача", colCount:"Раз", colTotalAp:"Всего AP", colDate:"Дата", colTime:"Время", colAp:"AP",
      searchPlaceholder:"Поиск по названию задачи…", clearFilters:"Сбросить фильтры", noMatch:"Совпадений не найдено.",
      dailyEntries:"ЗАПИСИ", dailyEmpty:"В этот день действий не зафиксировано.", freqTitle:"ЧАСТОТА",
      todoAddPlaceholder:"Добавить задачу…", todoEmpty:"Пока пусто. Добавьте первую задачу выше.",
      diffEasy:"Легко", diffNormal:"Обычно", diffHard:"Сложно",
      tabSync:"Синхр.", tabAchievements:"Достижения", tabLanguage:"Язык",
      syncIntro:"Подключите аккаунт для синхронизации данных между устройствами.",
      syncSoon:"Облачная синхронизация появится в будущем обновлении. Пока используйте Экспорт / Импорт.",
      syncGoogle:"Продолжить с Google", syncGithub:"Продолжить с GitHub", syncApple:"Продолжить с Apple", syncEmail:"Продолжить с Email",
      achIntro:"Достигните этих уровней, чтобы открыть их.", achLocked:"Заблокировано",
      langIntro:"Выберите язык. Изменится всё — каждый экран, каждое сообщение.",
      soundLabel:"Звук", vibLabel:"Вибрация", volLabel:"Громкость", close:"Закрыть",
      bootMsg:"Сессия начата — Acta v4.0", philMsg:"Философия: важно сделанное, а не запланированное. Никакого расписания — только признание.",
      helpMsg:"Введите /help для списка команд или просто опишите, что вы сделали.", helpHeader:"СПИСОК КОМАНД",
      unknownCmd:"Неизвестная команда: «{cmd}». Введите /help для списка.",
      addUsage:"Использование: /add <задача>", addInvalid:"Недопустимое имя задачи.",
      addExisting:"+1 AP — «{task}» (раз №{count})", addNew:"Зарегистрирована новая задача: «{task}» (+1 AP)",
      delUsage:"Использование: /del <задача>", delOk:"«{task}» удалена из репозитория.", delNotFound:"«{task}» не найдена в репозитории.",
      clearedMsg:"Экран очищен. Данные не затронуты.", exportedMsg:"Файл резервной копии скачан.",
      importedMsg:"Данные импортированы из «{file}».", importFailed:"Ошибка импорта: файл не является корректным JSON.", importReadFail:"Ошибка импорта: не удалось прочитать файл.",
      undidMsg:"Последнее действие отменено.", redidMsg:"Отменённое действие повторено.",
      todoDoneMsg:"Выполнено «{task}» (+{ap} AP) · Задачи", levelUp:"Уровень {level}!", nicedBtn:"Отлично!", account:"Аккаунт",
      cmdAdd:"Записывает действие. Существующая задача: +AP и счётчик +1; новая регистрируется автоматически.",
      cmdDel:"Удаляет задачу из репозитория.", cmdList:"Открывает статистику.", cmdExport:"Скачивает резервную копию данных в JSON.",
      cmdImport:"Загружает данные из файла резервной копии JSON.", cmdUndo:"Отменяет последнее действие.", cmdRedo:"Повторяет отменённое действие.",
      cmdTheme:"Переключает светлую/тёмную тему.", cmdClear:"Очищает экран. Данные сохраняются.", cmdHelp:"Показывает этот список снова.",
      dataLabel:"Данные", eraseData:"Удалить все данные", eraseConfirmMsg:"Это навсегда удалит все ваши AP, задачи, историю и список дел. Отменить нельзя.",
      erasedMsg:"Все данные удалены.", cancelBtn:"Отмена", confirmBtn:"Удалить", restoreHint:"Используйте Импорт, чтобы восстановить из резервной копии.",
      apTooltip:"AP = Acta Point, начисляется за выполненные действия. Уровень рассчитывается по общему AP по RPG-кривой — достигайте уровней-вех ради небольшого праздника.",
      syncedAs:"Вы вошли как {email}", signOut:"Выйти", continueBtn:"Продолжить", syncFillFields:"Введите email и пароль.",
      syncActiveNote:"Теперь ваши данные автоматически синхронизируются между устройствами, пока вы в системе.",
      syncConflictMsg:"На этом аккаунте уже есть сохранённые данные с другого устройства. Какие оставить?",
      syncKeepDevice:"Оставить это устройство", syncUseCloud:"Использовать облачные данные", syncUnavailable:"Синхронизация сейчас недоступна — проверьте подключение.",
      todayLabel:"сделано сегодня", shortcutsHeader:"ГОРЯЧИЕ КЛАВИШИ", scFocus:"Фокус на поле ввода", scEsc:"Закрыть диалоги", scUndo:"Отменить", scRedo:"Повторить",
      scExport:"Экспорт резервной копии", scImport:"Импорт резервной копии", scStats:"Открыть статистику", scTheme:"Сменить тему", monthlyTitle:"ЧАСТОТА ПО МЕСЯЦАМ" },

    hi:{ tagline:"जो किया — जो योजना बनाई वो नहीं", level:"स्तर", ap:"AP", streak:"दिन लगातार",
      stats:"आँकड़े", todo:"कार्य सूची", hint:"कोई दबाव नहीं, बस प्रगति। आज आपने क्या पूरा किया?",
      tabOverview:"अवलोकन", tabHistory:"इतिहास", tabDaily:"दैनिक", statsTitle:"आँकड़े",
      overviewEmpty:"रिपॉज़िटरी खाली है। शुरू करने के लिए /add <कार्य> टाइप करें।",
      overviewSummary:"{count} कार्य ट्रैक हो रहे हैं · कुल {ap} AP",
      colTask:"कार्य", colCount:"बार", colTotalAp:"कुल AP", colDate:"तारीख", colTime:"समय", colAp:"AP",
      searchPlaceholder:"कार्य नाम से खोजें…", clearFilters:"फ़िल्टर हटाएँ", noMatch:"कोई मेल नहीं मिला।",
      dailyEntries:"प्रविष्टियाँ", dailyEmpty:"इस दिन कोई कार्य दर्ज नहीं हुआ।", freqTitle:"आवृत्ति",
      todoAddPlaceholder:"कार्य जोड़ें…", todoEmpty:"अभी यहाँ कुछ नहीं है। ऊपर अपना पहला कार्य जोड़ें।",
      diffEasy:"आसान", diffNormal:"सामान्य", diffHard:"कठिन",
      tabSync:"सिंक", tabAchievements:"उपलब्धियाँ", tabLanguage:"भाषा",
      syncIntro:"डिवाइस के बीच डेटा सिंक करने के लिए खाता जोड़ें।",
      syncSoon:"क्लाउड सिंक भविष्य के अपडेट में आएगा। अभी के लिए Export / Import का उपयोग करें।",
      syncGoogle:"Google से जारी रखें", syncGithub:"GitHub से जारी रखें", syncApple:"Apple से जारी रखें", syncEmail:"ईमेल से जारी रखें",
      achIntro:"इन स्तरों तक पहुँचकर इन्हें अनलॉक करें।", achLocked:"लॉक्ड",
      langIntro:"अपनी भाषा चुनें। सब कुछ बदल जाएगा — हर स्क्रीन, हर संदेश।",
      soundLabel:"ध्वनि", vibLabel:"कंपन", volLabel:"आवाज़", close:"बंद करें",
      bootMsg:"सत्र शुरू हुआ — Acta v4.0", philMsg:"दर्शन: जो किया वह मायने रखता है, जो योजना बनाई वह नहीं। कोई शेड्यूल नहीं, सिर्फ़ पहचान।",
      helpMsg:"कमांड सूची के लिए /help टाइप करें, या बस बताएं कि आपने क्या किया।", helpHeader:"कमांड सूची",
      unknownCmd:"अज्ञात कमांड: \"{cmd}\"। सूची के लिए /help टाइप करें।",
      addUsage:"उपयोग: /add <कार्य>", addInvalid:"यह कार्य नाम मान्य नहीं है।",
      addExisting:"+1 AP — \"{task}\" (#{count})", addNew:"नया कार्य दर्ज हुआ: \"{task}\" (+1 AP)",
      delUsage:"उपयोग: /del <कार्य>", delOk:"\"{task}\" हटा दिया गया।", delNotFound:"\"{task}\" नहीं मिला।",
      clearedMsg:"स्क्रीन साफ़ हो गई। डेटा सुरक्षित है।", exportedMsg:"बैकअप फ़ाइल डाउनलोड हुई।",
      importedMsg:"\"{file}\" से डेटा आयात हुआ।", importFailed:"आयात विफल: फ़ाइल मान्य JSON नहीं है।", importReadFail:"आयात विफल: फ़ाइल पढ़ी नहीं जा सकी।",
      undidMsg:"पिछली कार्रवाई पूर्ववत की गई।", redidMsg:"पूर्ववत की गई कार्रवाई फिर से की गई।",
      todoDoneMsg:"\"{task}\" पूरा हुआ (+{ap} AP) · कार्य सूची", levelUp:"स्तर {level}!", nicedBtn:"बढ़िया!", account:"खाता",
      cmdAdd:"एक कार्रवाई दर्ज करें। मौजूदा कार्य: +AP और गिनती +1; नया कार्य स्वतः दर्ज होता है।",
      cmdDel:"रिपॉज़िटरी से कार्य हटाएँ।", cmdList:"आँकड़े खोलें।", cmdExport:"डेटा का JSON बैकअप डाउनलोड करें।",
      cmdImport:"JSON बैकअप फ़ाइल से डेटा लोड करें।", cmdUndo:"पिछली कार्रवाई पूर्ववत करें।", cmdRedo:"पूर्ववत की गई कार्रवाई फिर से करें।",
      cmdTheme:"लाइट/डार्क थीम बदलें।", cmdClear:"स्क्रीन साफ़ करें। डेटा सुरक्षित रहेगा।", cmdHelp:"यह सूची फिर से दिखाएँ।",
      dataLabel:"डेटा", eraseData:"सभी डेटा मिटाएँ", eraseConfirmMsg:"इससे आपका सारा AP, कार्य, इतिहास और कार्य सूची स्थायी रूप से मिट जाएगी। इसे पूर्ववत नहीं किया जा सकता।",
      erasedMsg:"सारा डेटा मिटा दिया गया।", cancelBtn:"रद्द करें", confirmBtn:"मिटाएँ", restoreHint:"बैकअप से पुनर्स्थापित करने के लिए Import का उपयोग करें।",
      apTooltip:"AP = Acta Point, कार्य पूरा करने पर मिलता है। स्तर कुल AP से RPG-शैली वक्र द्वारा गणना होता है — मील के पत्थर स्तरों पर पहुँचकर एक छोटा उत्सव मनाएं।",
      syncedAs:"{email} के रूप में साइन इन किया गया", signOut:"साइन आउट करें", continueBtn:"जारी रखें", syncFillFields:"कृपया ईमेल और पासवर्ड दोनों दर्ज करें।",
      syncActiveNote:"साइन इन रहते हुए अब आपका डेटा आपके डिवाइस के बीच अपने आप सिंक होगा।",
      syncConflictMsg:"इस खाते में पहले से ही किसी अन्य डिवाइस का सेव किया हुआ डेटा है। आप कौन सा रखना चाहेंगे?",
      syncKeepDevice:"यह डिवाइस रखें", syncUseCloud:"क्लाउड डेटा उपयोग करें", syncUnavailable:"अभी सिंक उपलब्ध नहीं है — अपना कनेक्शन जाँचें।",
      todayLabel:"आज किए गए", shortcutsHeader:"कीबोर्ड शॉर्टकट", scFocus:"इनपुट पर फ़ोकस करें", scEsc:"डायलॉग बंद करें", scUndo:"पूर्ववत करें", scRedo:"फिर से करें",
      scExport:"बैकअप एक्सपोर्ट करें", scImport:"बैकअप इम्पोर्ट करें", scStats:"आँकड़े खोलें", scTheme:"थीम बदलें", monthlyTitle:"मासिक आवृत्ति" },

    id:{ tagline:"hal yang dilakukan — bukan yang direncanakan", level:"LEVEL", ap:"AP", streak:"hari beruntun",
      stats:"Statistik", todo:"To-Do", hint:"Tanpa tekanan, hanya kemajuan. Apa yang kamu selesaikan hari ini?",
      tabOverview:"Ringkasan", tabHistory:"Riwayat", tabDaily:"Harian", statsTitle:"STATISTIK",
      overviewEmpty:"Repositori kosong. Ketik /add <tugas> untuk mulai mencatat.",
      overviewSummary:"{count} tugas terlacak · total {ap} AP",
      colTask:"Tugas", colCount:"Jumlah", colTotalAp:"Total AP", colDate:"Tanggal", colTime:"Waktu", colAp:"AP",
      searchPlaceholder:"Cari berdasarkan nama tugas…", clearFilters:"Hapus filter", noMatch:"Tidak ada hasil yang cocok.",
      dailyEntries:"CATATAN", dailyEmpty:"Tidak ada aktivitas tercatat di hari ini.", freqTitle:"FREKUENSI",
      todoAddPlaceholder:"Tambah tugas…", todoEmpty:"Belum ada apa-apa di sini. Tambahkan tugas pertamamu di atas.",
      diffEasy:"Mudah", diffNormal:"Normal", diffHard:"Sulit",
      tabSync:"Sinkron", tabAchievements:"Pencapaian", tabLanguage:"Bahasa",
      syncIntro:"Hubungkan akun untuk menyinkronkan data di berbagai perangkat.",
      syncSoon:"Sinkronisasi cloud akan hadir di pembaruan mendatang. Untuk saat ini, gunakan Export / Import.",
      syncGoogle:"Lanjutkan dengan Google", syncGithub:"Lanjutkan dengan GitHub", syncApple:"Lanjutkan dengan Apple", syncEmail:"Lanjutkan dengan Email",
      achIntro:"Capai level ini untuk membukanya.", achLocked:"Terkunci",
      langIntro:"Pilih bahasamu. Semuanya akan berubah — setiap layar, setiap pesan.",
      soundLabel:"Suara", vibLabel:"Getaran", volLabel:"Volume", close:"Tutup",
      bootMsg:"Sesi dimulai — Acta v4.0", philMsg:"Filosofi: yang dikerjakan, bukan yang direncanakan. Tanpa jadwal, hanya pengakuan.",
      helpMsg:"Ketik /help untuk daftar perintah, atau langsung ketik apa yang kamu lakukan.", helpHeader:"DAFTAR PERINTAH",
      unknownCmd:"Perintah tidak dikenal: \"{cmd}\". Ketik /help untuk daftar.",
      addUsage:"Penggunaan: /add <tugas>", addInvalid:"Nama tugas itu tidak valid.",
      addExisting:"+1 AP — \"{task}\" (ke-{count})", addNew:"Tugas baru terdaftar: \"{task}\" (+1 AP)",
      delUsage:"Penggunaan: /del <tugas>", delOk:"\"{task}\" telah dihapus dari repositori.", delNotFound:"\"{task}\" tidak ditemukan.",
      clearedMsg:"Layar dibersihkan. Data kamu tetap aman.", exportedMsg:"File cadangan telah diunduh.",
      importedMsg:"Data diimpor dari \"{file}\".", importFailed:"Impor gagal: file bukan JSON yang valid.", importReadFail:"Impor gagal: file tidak dapat dibaca.",
      undidMsg:"Tindakan terakhir dibatalkan.", redidMsg:"Tindakan yang dibatalkan diulang kembali.",
      todoDoneMsg:"Selesai \"{task}\" (+{ap} AP) · To-Do", levelUp:"Level {level}!", nicedBtn:"Mantap!", account:"Akun",
      cmdAdd:"Mencatat sebuah tindakan. Tugas yang ada: +AP dan hitungan +1; tugas baru terdaftar otomatis.",
      cmdDel:"Menghapus tugas dari repositori.", cmdList:"Membuka Statistik.", cmdExport:"Mengunduh cadangan data dalam JSON.",
      cmdImport:"Memuat data dari file cadangan JSON.", cmdUndo:"Membatalkan tindakan terakhir.", cmdRedo:"Mengulang tindakan yang dibatalkan.",
      cmdTheme:"Beralih tema terang/gelap.", cmdClear:"Membersihkan layar. Data tetap disimpan.", cmdHelp:"Menampilkan daftar ini lagi.",
      dataLabel:"Data", eraseData:"Hapus semua data", eraseConfirmMsg:"Ini akan menghapus semua AP, tugas, riwayat, dan to-do kamu secara permanen. Tidak bisa dibatalkan.",
      erasedMsg:"Semua data telah dihapus.", cancelBtn:"Batal", confirmBtn:"Hapus", restoreHint:"Gunakan Import untuk memulihkan dari cadangan.",
      apTooltip:"AP = Acta Point, didapat dengan menyelesaikan tindakan. Level dihitung dari total AP dengan kurva gaya RPG — capai level tonggak untuk perayaan kecil.",
      syncedAs:"Masuk sebagai {email}", signOut:"Keluar", continueBtn:"Lanjutkan", syncFillFields:"Isi email dan kata sandi.",
      syncActiveNote:"Data kamu sekarang otomatis tersinkron di seluruh perangkat selama kamu masuk.",
      syncConflictMsg:"Akun ini sudah punya data tersimpan dari perangkat lain. Mana yang ingin kamu simpan?",
      syncKeepDevice:"Simpan perangkat ini", syncUseCloud:"Gunakan data cloud", syncUnavailable:"Sinkronisasi tidak tersedia sekarang — periksa koneksi kamu.",
      todayLabel:"selesai hari ini", shortcutsHeader:"PINTASAN KEYBOARD", scFocus:"Fokus ke input", scEsc:"Tutup dialog", scUndo:"Urungkan", scRedo:"Ulangi",
      scExport:"Ekspor cadangan", scImport:"Impor cadangan", scStats:"Buka Statistik", scTheme:"Ganti tema", monthlyTitle:"FREKUENSI BULANAN" }
  };

  var SLOGANS = {
    en:{0:"Every journey begins with a single step. Start your first action today!",
        5:"Momentum built! You're turning small actions into daily power.",
        10:"Consistency unlocked! Action is becoming your second nature.",
        25:"Unstoppable force! You've built a solid fortress of achievements.",
        50:"Master of Action! Overcoming procrastination is now your default state.",
        100:"Legendary Status! 100 levels of pure dedication and discipline.",
        200:"Ultimate Apex! You've conquered yourself and mastered the art of doing. Absolutely legendary!"},
    vi:{0:"Mọi hành trình đều bắt đầu từ một bước chân. Hãy bắt đầu hành động đầu tiên ngay hôm nay!",
        5:"Đà đã có! Bạn đang biến những hành động nhỏ thành sức mạnh mỗi ngày.",
        10:"Đã mở khóa sự bền bỉ! Hành động đang dần trở thành bản năng của bạn.",
        25:"Sức mạnh không thể ngăn cản! Bạn đã xây một pháo đài thành tựu vững chắc.",
        50:"Bậc thầy hành động! Vượt qua trì hoãn giờ là trạng thái mặc định của bạn.",
        100:"Vị thế huyền thoại! 100 cấp độ của sự tận tâm và kỷ luật thuần túy.",
        200:"Đỉnh cao tuyệt đối! Bạn đã chinh phục chính mình và làm chủ nghệ thuật hành động. Thực sự huyền thoại!"},
    es:{0:"Todo viaje comienza con un solo paso. ¡Empieza tu primera acción hoy!",
        5:"¡Impulso conseguido! Estás convirtiendo pequeñas acciones en poder diario.",
        10:"¡Constancia desbloqueada! La acción se está volviendo tu segunda naturaleza.",
        25:"¡Fuerza imparable! Has construido una sólida fortaleza de logros.",
        50:"¡Maestro de la Acción! Superar la procrastinación ya es tu estado natural.",
        100:"¡Estatus Legendario! 100 niveles de pura dedicación y disciplina.",
        200:"¡Apex Definitivo! Te has conquistado a ti mismo y dominado el arte de hacer. ¡Absolutamente legendario!"},
    fr:{0:"Tout voyage commence par un premier pas. Lancez votre première action aujourd'hui !",
        5:"Élan créé ! Vous transformez de petites actions en puissance quotidienne.",
        10:"Régularité débloquée ! L'action devient votre seconde nature.",
        25:"Force inarrêtable ! Vous avez bâti une solide forteresse de réussites.",
        50:"Maître de l'Action ! Vaincre la procrastination est désormais votre état par défaut.",
        100:"Statut Légendaire ! 100 niveaux de pure discipline et de dévouement.",
        200:"Apogée Absolu ! Vous vous êtes surpassé et avez maîtrisé l'art de faire. Absolument légendaire !"},
    de:{0:"Jede Reise beginnt mit einem ersten Schritt. Starte noch heute deine erste Aktion!",
        5:"Schwung aufgebaut! Du verwandelst kleine Aktionen in tägliche Kraft.",
        10:"Beständigkeit freigeschaltet! Handeln wird zu deiner zweiten Natur.",
        25:"Unaufhaltsame Kraft! Du hast eine solide Festung aus Erfolgen errichtet.",
        50:"Meister der Tat! Prokrastination zu überwinden ist jetzt dein Normalzustand.",
        100:"Legendärer Status! 100 Stufen puren Einsatzes und Disziplin.",
        200:"Absoluter Gipfel! Du hast dich selbst überwunden und die Kunst des Tuns gemeistert. Absolut legendär!"},
    pt:{0:"Toda jornada começa com um único passo. Comece sua primeira ação hoje!",
        5:"Impulso criado! Você está transformando pequenas ações em poder diário.",
        10:"Consistência desbloqueada! A ação está se tornando sua segunda natureza.",
        25:"Força imparável! Você construiu uma sólida fortaleza de conquistas.",
        50:"Mestre da Ação! Superar a procrastinação agora é seu estado padrão.",
        100:"Status Lendário! 100 níveis de pura dedicação e disciplina.",
        200:"Ápice Absoluto! Você conquistou a si mesmo e dominou a arte de fazer. Absolutamente lendário!"},
    ja:{0:"すべての旅は一歩から始まる。今日、最初の行動を始めよう！",
        5:"勢いがついた！小さな行動が毎日の力に変わっている。",
        10:"継続を解放！行動が第二の性格になりつつある。",
        25:"止まらない力！achievements の堅固な砦を築いた。",
        50:"行動の達人！先延ばしを克服することが当たり前になった。",
        100:"伝説のステータス！100レベル分の純粋な献身と規律。",
        200:"究極の頂点！自分自身に打ち勝ち、実行の技を極めた。まさに伝説！"},
    ko:{0:"모든 여정은 한 걸음부터 시작됩니다. 오늘 첫 행동을 시작하세요!",
        5:"탄력이 붙었어요! 작은 행동들이 매일의 힘으로 바뀌고 있습니다.",
        10:"꾸준함 해제! 행동이 당신의 제2의 본성이 되어가고 있습니다.",
        25:"멈출 수 없는 힘! 탄탄한 성취의 요새를 쌓았습니다.",
        50:"행동의 달인! 미루는 습관을 이기는 것이 이제 기본값이 되었습니다.",
        100:"전설적인 지위! 100단계의 순수한 헌신과 규율.",
        200:"궁극의 정점! 자신을 극복하고 실행의 기술을 완성했습니다. 그야말로 전설입니다!"},
    zh:{0:"每段旅程都始于第一步。今天就开始你的第一个行动吧！",
        5:"势头已起！你正在把小小的行动变成日常的力量。",
        10:"坚持已解锁！行动正在成为你的第二天性。",
        25:"势不可挡！你已建起一座坚实的成就堡垒。",
        50:"行动大师！战胜拖延如今已是你的常态。",
        100:"传奇地位！100个等级，纯粹的专注与自律。",
        200:"终极巅峰！你已征服自己，掌握了行动的艺术。绝对传奇！"},
    ru:{0:"Любой путь начинается с одного шага. Начните своё первое действие сегодня!",
        5:"Импульс набран! Маленькие действия превращаются в ежедневную силу.",
        10:"Постоянство разблокировано! Действие становится вашей второй натурой.",
        25:"Неудержимая сила! Вы построили крепкую крепость достижений.",
        50:"Мастер Действия! Побеждать прокрастинацию — теперь ваше обычное состояние.",
        100:"Легендарный статус! 100 уровней чистой самоотдачи и дисциплины.",
        200:"Абсолютный пик! Вы победили себя и овладели искусством действия. Поистине легендарно!"},
    hi:{0:"हर सफ़र एक कदम से शुरू होता है। आज ही अपनी पहली कार्रवाई शुरू करें!",
        5:"गति बन गई! आप छोटी कार्रवाइयों को रोज़ाना की ताकत में बदल रहे हैं।",
        10:"निरंतरता अनलॉक! कार्रवाई अब आपकी दूसरी प्रकृति बनती जा रही है।",
        25:"अजेय शक्ति! आपने उपलब्धियों का एक मज़बूत किला बना लिया है।",
        50:"कार्रवाई के उस्ताद! टालमटोल पर काबू पाना अब आपकी आदत बन गई है।",
        100:"पौराणिक दर्जा! शुद्ध समर्पण और अनुशासन के 100 स्तर।",
        200:"परम शिखर! आपने खुद पर विजय पाई और करने की कला में महारत हासिल की। पूरी तरह से पौराणिक!"},
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
     Firebase (cloud sync) — degrades gracefully if unavailable
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

  function loadState(){
    try{
      var raw = localStorage.getItem(STORAGE_KEY);
      if(raw){
        var p = JSON.parse(raw);
        return { total_ap:p.total_ap||0, tasks:p.tasks||{}, history:p.history||[], todos:p.todos||[] };
      }
      var old = localStorage.getItem(STORAGE_KEY_V2);
      if(old){
        var o = JSON.parse(old);
        var tasks = {};
        Object.keys(o.tasks||{}).forEach(function(k){
          tasks[k] = { count:o.tasks[k].count||0, last_done:o.tasks[k].last_done||Date.now() };
        });
        var history = (o.history||[]).map(function(h){ return { ts:h.ts, task:h.task, ap:h.sp||1 }; });
        return { total_ap:o.total_sp||0, tasks:tasks, history:history, todos:[] };
      }
    }catch(e){}
    return { total_ap:0, tasks:{}, history:[], todos:[] };
  }

  function saveState(){
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
    catch(e){ pushEntry("Could not save data (localStorage error).", "✕"); }
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
    return JSON.parse(JSON.stringify({ total_ap:state.total_ap, tasks:state.tasks, history:state.history, todos:state.todos }));
  }
  function pushUndo(){
    undoSnapshot = cloneData();
    redoSnapshot = null;
  }
  function applyData(data){
    state.total_ap = data.total_ap || 0;
    state.tasks = data.tasks || {};
    state.history = data.history || [];
    state.todos = data.todos || [];
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
  function escapeHtml(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
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

  function pushEntry(text, sym, dim, i18nKey){
    var row = document.createElement("div");
    row.className = "entry" + (dim ? " dim" : "");
    if(i18nKey) row.dataset.i18nKey = i18nKey;
    var s = document.createElement("span"); s.className = "sym"; s.textContent = sym || "·";
    var tx = document.createElement("span"); tx.className = "txt"; tx.innerHTML = escapeHtml(text);
    var meta = document.createElement("span"); meta.className = "meta"; meta.textContent = timeKey(Date.now());
    row.appendChild(s); row.appendChild(tx); row.appendChild(meta);
    feedEl.appendChild(row);
    feedEl.scrollTop = feedEl.scrollHeight;
  }
  function pushEcho(raw){
    var row = document.createElement("div");
    row.className = "entry dim";
    var s = document.createElement("span"); s.className="sym"; s.textContent="›";
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
    streakNumEl.textContent = info.streak;
    document.getElementById("todayCountNum").textContent = info.todayCount;
    var tier = flameTierFor(info.streak);
    var lit = info.todayActive && info.streak > 0;
    var html = "";
    for(var i=0;i<tier;i++){ html += "<span class='flame"+(lit?" lit":"")+"' data-i='"+i+"'>🔥</span>"; }
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
  function afterMutation(){
    saveState();
    refreshTotals();
    renderStreak();
    refreshUndoRedoButtons();
    refreshTodoBadge();
    checkLevelEvents();
    if(overlayEl.classList.contains("open")) renderActiveTab();
    if(todoDrawer.classList.contains("open")) renderTodoList();
    scheduleCloudSave();
  }

  /* =========================================================
     Core action logging
  ========================================================= */

  function logAction(taskName, apAmount, skipTodoSync){
    var wasEmpty = state.history.length === 0;
    var existing = state.tasks[taskName];
    var isNew = !existing;
    if(existing){
      existing.count += 1;
      existing.total_ap = (existing.total_ap||0) + apAmount;
      existing.last_done = Date.now();
    }else{
      state.tasks[taskName] = { count:1, total_ap:apAmount, last_done:Date.now() };
    }
    state.total_ap += apAmount;
    state.history.push({ ts:Date.now(), task:taskName, ap:apAmount });
    if(isNew && !skipTodoSync){
      var alreadyInTodos = state.todos.some(function(td){ return normalizeTaskName(parseTodoTask(td.text)) === taskName; });
      if(!alreadyInTodos){
        state.todos.push({ id:uid(), text:taskName, done:false, completedAt:null });
      }
    }
    if(wasEmpty) maybeShowLevelZero();
    return isNew;
  }

  /* =========================================================
     Commands
  ========================================================= */

  function cmdAdd(args){
    if(args.length === 0){ pushEntry(t("addUsage"), "✕"); SFX.error(); return; }
    var taskName = normalizeTaskName(args.join(" "));
    if(!taskName){ pushEntry(t("addInvalid"), "✕"); SFX.error(); return; }
    pushUndo();
    var isNew = logAction(taskName, 1);
    afterMutation();
    if(isNew){
      pushEntry(t("addNew", { task:taskName }), "★");
      SFX.newTask();
    }else{
      pushEntry(t("addExisting", { task:taskName, count:state.tasks[taskName].count }), "✓");
      SFX.success();
    }
  }

  function cmdDel(args){
    if(args.length === 0){ pushEntry(t("delUsage"), "✕"); SFX.error(); return; }
    var taskName = normalizeTaskName(args.join(" "));
    if(state.tasks[taskName]){
      pushUndo();
      delete state.tasks[taskName];
      afterMutation();
      pushEntry(t("delOk", { task:taskName }), "–", true);
      SFX.remove();
    }else{
      pushEntry(t("delNotFound", { task:taskName }), "✕");
      SFX.error();
    }
  }

  function cmdClear(){
    feedEl.innerHTML = "";
    pushEntry(t("clearedMsg"), "·", true);
    SFX.click();
  }

  var SHORTCUTS = [
    { keys:"Ctrl/⌘ + K or /", labelKey:"scFocus" },
    { keys:"Esc", labelKey:"scEsc" },
    { keys:"Ctrl/⌘ + Z", labelKey:"scUndo" },
    { keys:"Ctrl/⌘ + Y", labelKey:"scRedo" },
    { keys:"Ctrl/⌘ + E", labelKey:"scExport" },
    { keys:"Ctrl/⌘ + O", labelKey:"scImport" },
    { keys:"Ctrl/⌘ + Shift + S", labelKey:"scStats" },
    { keys:"Ctrl/⌘ + Shift + L", labelKey:"scTheme" }
  ];

  function cmdHelp(){
    pushEntry(t("helpHeader"), "·", true);
    CMD_LIST.forEach(function(key){
      var line = CMD_SLASH[key] + (CMD_ARGS[key] ? " "+CMD_ARGS[key] : "") + "  " + t("cmd"+key.charAt(0).toUpperCase()+key.slice(1));
      pushEntry(line, "·", true);
    });
    pushEntry(t("shortcutsHeader"), "·", true);
    SHORTCUTS.forEach(function(s){
      pushEntry(s.keys + "  " + t(s.labelKey), "·", true);
    });
  }

  function doExport(){
    var payload = { total_ap: state.total_ap, tasks: state.tasks, history: state.history, todos: state.todos, settings: settings, exported_at: Date.now() };
    var blob = new Blob([JSON.stringify(payload,null,2)], { type:"application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = "acta-backup.json";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    pushEntry(t("exportedMsg"), "·", true);
    SFX.click();
  }

  function doImportFile(file){
    var reader = new FileReader();
    reader.onload = function(){
      try{
        var data = JSON.parse(reader.result);
        pushUndo();
        applyData(data);
        afterMutation();
        pushEntry(t("importedMsg", { file:file.name }), "·", true);
        SFX.newTask();
      }catch(e){
        pushEntry(t("importFailed"), "✕");
        SFX.error();
      }
    };
    reader.onerror = function(){ pushEntry(t("importReadFail"), "✕"); SFX.error(); };
    reader.readAsText(file);
  }

  function doUndo(){
    if(undoSnapshot === null) return;
    redoSnapshot = cloneData();
    var prev = undoSnapshot;
    undoSnapshot = null;
    applyData(prev);
    afterMutation();
    pushEntry(t("undidMsg"), "↺", true);
    SFX.undo();
  }
  function doRedo(){
    if(redoSnapshot === null) return;
    undoSnapshot = cloneData();
    var next = redoSnapshot;
    redoSnapshot = null;
    applyData(next);
    afterMutation();
    pushEntry(t("redidMsg"), "↻", true);
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
    undoSnapshot = null; redoSnapshot = null;
    milestoneState = { maxLevel:0, level0Shown:false };
    saveMilestoneState();
    saveState();
    refreshTotals(); renderStreak(); refreshUndoRedoButtons(); refreshTodoBadge();
    lastKnownLevel = 0;
    feedEl.innerHTML = "";
    pushEntry(t("erasedMsg"), "·", true);
    if(overlayEl.classList.contains("open")) renderActiveTab();
    closeDrawer(userDrawer);
    SFX.remove();
  }

  /* =========================================================
     Cloud sync (Firebase)
  ========================================================= */

  var cloudSaveTimer = null;
  function scheduleCloudSave(){
    if(!fbReady || !fbUser || !fbDb) return;
    clearTimeout(cloudSaveTimer);
    cloudSaveTimer = setTimeout(function(){
      fbDb.collection("actaUsers").doc(fbUser.uid).set({
        total_ap: state.total_ap, tasks: state.tasks, history: state.history, todos: state.todos, updated_at: Date.now()
      }).catch(function(){});
    }, 1500);
  }

  function cloudHasData(d){
    return !!d && ((d.history && d.history.length>0) || (d.tasks && Object.keys(d.tasks).length>0) || (d.todos && d.todos.length>0));
  }
  function localHasData(){
    return state.history.length>0 || Object.keys(state.tasks).length>0 || state.todos.length>0;
  }

  function resolveCloudSync(){
    if(!fbReady || !fbUser || !fbDb) return;
    fbDb.collection("actaUsers").doc(fbUser.uid).get().then(function(snap){
      var cloud = snap.exists ? snap.data() : null;
      if(cloudHasData(cloud) && localHasData() && !syncLinked){
        showConfirm(t("syncConflictMsg"), function(){
          applyData(cloud); afterMutation(); syncLinked = true;
        }, {
          cancelLabel: t("syncKeepDevice"),
          okLabel: t("syncUseCloud"),
          onCancel: function(){ syncLinked = true; scheduleCloudSave(); }
        });
      }else if(cloudHasData(cloud)){
        applyData(cloud); afterMutation(); syncLinked = true;
      }else{
        syncLinked = true; scheduleCloudSave();
      }
    }).catch(function(err){ showSyncNote(err.message || t("syncUnavailable")); });
  }

  function showSyncNote(msg){
    var note = document.getElementById("syncNote");
    if(note){ note.textContent = msg; note.classList.add("show"); }
  }

  function fbSignInGoogle(){
    if(!fbReady){ showSyncNote(t("syncUnavailable")); return; }
    var provider = new firebase.auth.GoogleAuthProvider();
    fbAuth.signInWithRedirect(provider).catch(function(err){ showSyncNote(err.message || t("syncUnavailable")); });
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
  function fbSignOutAccount(){ if(fbAuth) fbAuth.signOut(); syncLinked = false; }

  if(fbReady){
    fbAuth.onAuthStateChanged(function(user){
      fbUser = user;
      if(userDrawer.classList.contains("open")) renderSyncTab();
      if(user) resolveCloudSync();
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
        if(cmd.charAt(0) === "/"){ pushEntry(t("unknownCmd", { cmd:cmd }), "✕"); SFX.error(); }
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
      var totalApForTask = tk.total_ap !== undefined ? tk.total_ap : tk.count;
      var tr = document.createElement("tr");
      tr.innerHTML = "<td>"+escapeHtml(n)+"</td><td class='num'>"+tk.count+"</td><td class='num'>"+totalApForTask+"</td>";
      tbody.appendChild(tr);
    });
    table.appendChild(tbody); wrap.appendChild(table); pane.appendChild(wrap);

    var chartTitle = document.createElement("div");
    chartTitle.className = "sub"; chartTitle.style.marginTop = "18px"; chartTitle.textContent = t("freqTitle");
    pane.appendChild(chartTitle);

    names.forEach(function(n, i){
      var tk = state.tasks[n];
      var row = document.createElement("div"); row.className = "bar-row";
      var pct = maxCount > 0 ? Math.max(4, (tk.count/maxCount)*100) : 0;
      row.innerHTML = "<div class='bar-label'>"+escapeHtml(n)+"</div>"+
                      "<div class='bar-track'><div class='bar-fill' style='width:"+pct+"%; background:"+shadeFor(i,names.length,n)+"'></div></div>"+
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
        li.innerHTML = "<span class='sw' style='background:"+shadeFor(i,taskNames.length,n)+"'></span>"+escapeHtml(n)+" — "+bySp[n]+" "+t("ap")+" ("+pct+"%)";
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
      check.textContent = item.done ? "✓" : "";
      check.addEventListener("click", function(){ toggleTodoDone(item.id); });

      var txtWrap = document.createElement("div");
      txtWrap.className = "todo-text";
      var line = document.createElement("div");
      line.innerHTML = renderTodoText(item.text);
      txtWrap.appendChild(line);

      var del = document.createElement("button");
      del.className = "todo-del"; del.textContent = "✕"; del.type = "button";
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
    state.todos.push({ id:uid(), text:clean, done:false, completedAt:null });
    saveState(); refreshTodoBadge(); renderTodoList();
    SFX.click();
  }

  function toggleTodoDone(id){
    var item = state.todos.find(function(x){ return x.id === id; });
    if(!item) return;
    if(item.done){
      item.done = false; item.completedAt = null;
      saveState(); refreshTodoBadge(); renderTodoList();
      return;
    }
    pushUndo();
    item.done = true; item.completedAt = Date.now();
    var taskName = normalizeTaskName(parseTodoTask(item.text));
    logAction(taskName, 1, true);
    afterMutation();
    pushEntry(t("todoDoneMsg", { task:taskName, ap:1 }), "✓");
    SFX.todoEasy();

    var rect = todoListEl.getBoundingClientRect();
    floatApGain(1, rect.left+rect.width/2, rect.top+30);
  }

  function deleteTodo(id){
    state.todos = state.todos.filter(function(x){ return x.id !== id; });
    saveState(); refreshTodoBadge(); renderTodoList();
    SFX.click();
  }

  /* =========================================================
     Account drawer (Sync / Achievements / Language)
  ========================================================= */

  function renderSyncTab(){
    var pane = document.getElementById("acc-sync");
    if(fbUser){
      var label = fbUser.email || fbUser.displayName || fbUser.uid;
      pane.innerHTML =
        "<div class='sub' style='margin-bottom:16px;'>"+t("syncedAs",{email:label})+"</div>"+
        "<div class='sub' style='margin-bottom:16px;'>"+t("syncActiveNote")+"</div>"+
        "<button class='sync-btn' id='signOutBtn' style='justify-content:center;'>"+t("signOut")+"</button>"+
        "<div class='sync-note' id='syncNote'></div>";
      document.getElementById("signOutBtn").addEventListener("click", function(){ fbSignOutAccount(); SFX.click(); });
      return;
    }
    pane.innerHTML =
      "<div class='sub' style='margin-bottom:16px;'>"+t("syncIntro")+"</div>"+
      "<button class='sync-btn' id='syncGoogleBtn'>"+t("syncGoogle")+"</button>"+
      "<button class='sync-btn' id='syncEmailToggleBtn'>"+t("syncEmail")+"</button>"+
      "<div id='emailForm' style='display:none; margin-top:6px;'>"+
        "<input type='email' id='syncEmailInput' placeholder='email@example.com' style='width:100%; margin-bottom:8px; background:var(--bg); border:1px solid var(--line); color:var(--ink); border-radius:10px; padding:9px 12px; font-size:12.5px; font-family:var(--font);'>"+
        "<input type='password' id='syncPassInput' placeholder='••••••••' style='width:100%; margin-bottom:8px; background:var(--bg); border:1px solid var(--line); color:var(--ink); border-radius:10px; padding:9px 12px; font-size:12.5px; font-family:var(--font);'>"+
        "<button class='sync-btn' id='syncEmailSubmitBtn' style='justify-content:center;'>"+t("continueBtn")+"</button>"+
      "</div>"+
      "<div class='sync-note' id='syncNote'></div>";
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
    pane.innerHTML = "<div class='sub' style='margin-bottom:14px;'>"+t("langIntro")+"</div><div id='langList'></div>"+
      "<div class='data-section'>"+
        "<div class='sub' style='margin-bottom:8px;'>"+t("dataLabel")+"</div>"+
        "<button class='sync-btn' id='eraseDataBtn' style='border-color:var(--ink-dim); justify-content:center; font-weight:700;'>"+t("eraseData")+"</button>"+
        "<div class='sub' style='margin-top:8px; margin-bottom:0;'>"+t("restoreHint")+"</div>"+
      "</div>";
    var list = document.getElementById("langList");
    LANGS.forEach(function(code){
      var btn = document.createElement("button");
      btn.className = "lang-btn" + (code === currentLang ? " sel" : "");
      btn.innerHTML = "<span>"+LANG_NAMES[code]+"</span>" + (code===currentLang ? "<span>✓</span>" : "");
      btn.addEventListener("click", function(){
        setLanguage(code);
      });
      list.appendChild(btn);
    });
    document.getElementById("eraseDataBtn").addEventListener("click", function(){
      showConfirm(t("eraseConfirmMsg"), eraseAllData);
    });
  }

  function renderAccountDrawer(){
    renderSyncTab(); renderAchievementsTab(); renderLanguageTab();
  }

  function setLanguage(code){
    currentLang = code;
    settings.lang = code;
    saveSettings();
    applyStaticText();
    refreshStaticFeedEntries();
    renderAccountDrawer();
    if(overlayEl.classList.contains("open")) renderActiveTab();
    if(todoDrawer.classList.contains("open")) renderTodoList();
    SFX.lang();
  }

  function refreshStaticFeedEntries(){
    var entries = feedEl.querySelectorAll(".entry[data-i18n-key]");
    entries.forEach(function(entry){
      var key = entry.dataset.i18nKey;
      var text = t(key);
      var tx = entry.querySelector(".txt");
      if(tx) tx.innerHTML = escapeHtml(text);
    });
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
    document.getElementById("statsBtnLabel").textContent = t("stats");
    document.getElementById("todoBtnLabel").textContent = t("todo");
    document.getElementById("dockHint").textContent = t("hint");
    document.getElementById("statsTitleText").textContent = t("statsTitle");
    document.getElementById("tabOverviewBtn").textContent = t("tabOverview");
    document.getElementById("tabHistoryBtn").textContent = t("tabHistory");
    document.getElementById("tabDailyBtn").textContent = t("tabDaily");
    document.getElementById("todoDrawerTitle").textContent = t("todo");
    document.getElementById("todoAddInput").placeholder = t("todoAddPlaceholder");
    document.getElementById("accountTitleText").textContent = t("account");
    document.getElementById("accTabSyncBtn").textContent = t("tabSync");
    document.getElementById("accTabAchBtn").textContent = t("tabAchievements");
    document.getElementById("accTabLangBtn").textContent = t("tabLanguage");
    document.getElementById("soundLabelText").textContent = t("soundLabel");
    document.getElementById("vibLabelText").textContent = t("vibLabel");
    document.getElementById("volLabelText").textContent = t("volLabel");
    document.getElementById("modalCloseX").setAttribute("aria-label", t("close"));
    document.getElementById("levelTooltip").textContent = t("apTooltip");
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

  document.querySelectorAll(".acc-tab-btn").forEach(function(btn){
    btn.addEventListener("click", function(){
      document.querySelectorAll(".acc-tab-btn").forEach(function(b){ b.classList.toggle("active", b===btn); });
      document.querySelectorAll(".acc-pane").forEach(function(p){ p.classList.toggle("active", p.id === "acc-"+btn.dataset.acctab); });
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
  exportBtn.addEventListener("click", doExport);
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
     Boot
  ========================================================= */

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

  pushEntry(t("bootMsg"), "·", true, "bootMsg");
  pushEntry(t("philMsg"), "·", true, "philMsg");
  pushEntry(t("helpMsg"), "·", true, "helpMsg");
  renderStreak();

  if(state.history.length === 0) maybeShowLevelZero();

})();

