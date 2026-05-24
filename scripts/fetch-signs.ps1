$signs = [ordered]@{
  'stop'                    = 'France_road_sign_AB4.svg'
  'cedez'                   = 'France_road_sign_AB3a.svg'
  'sens-interdit'           = 'France_road_sign_B1.svg'
  'interdit-tous'           = 'France_road_sign_B0.svg'
  'danger'                  = 'France_road_sign_A14.svg'
  'virage-droite'           = 'France_road_sign_A1a.svg'
  'chaussee-glissante'      = 'France_road_sign_A4.svg'
  'travaux'                 = 'France_road_sign_AK5.svg'
  'priorite-droite'         = 'France_road_sign_AB1.svg'
  'route-prioritaire'       = 'France_road_sign_AB6.svg'
  'fin-prioritaire'         = 'France_road_sign_AB7.svg'
  'limite-50'               = 'France_road_sign_B14_(50).svg'
  'limite-30'               = 'France_road_sign_B14_(30).svg'
  'limite-70'               = 'France_road_sign_B14_(70).svg'
  'limite-90'               = 'France_road_sign_B14_(90).svg'
  'fin-limitation'          = 'France_road_sign_B33_(50).svg'
  'fin-toutes-interdictions'= 'France_road_sign_B31.svg'
  'agglo-entree'            = 'France_road_sign_EB10.svg'
  'agglo-sortie'            = 'France_road_sign_EB20.svg'
  'autoroute'               = 'France_road_sign_C207.svg'
  'fin-autoroute'           = 'France_road_sign_C208.svg'
  'voie-rapide'             = 'France_road_sign_C107.svg'
  'passage-pietons'         = 'France_road_sign_C20a.svg'
  'zone-30'                 = 'France_road_sign_B52.svg'
  'aire-pietonne'           = 'France_road_sign_B54.svg'
  'sens-giratoire'          = 'France_road_sign_AB25.svg'
  'obligation-droite'       = 'France_road_sign_B21-1.svg'
}
$out = "public/signs"
New-Item -ItemType Directory -Force $out | Out-Null
foreach ($k in $signs.Keys) {
  $dest = Join-Path $out ($k + ".svg")
  if ((Test-Path $dest) -and ((Get-Item $dest).Length -gt 200)) { Write-Host "skip $k"; continue }
  $url = "https://commons.wikimedia.org/wiki/Special:FilePath/" + $signs[$k]
  $ok = $false
  for ($i=0; $i -lt 4 -and -not $ok; $i++) {
    try {
      Invoke-WebRequest -Uri $url -OutFile $dest -UserAgent "CodeMotoApp/1.0 (contact:nozap271206@gmail.com)" -ErrorAction Stop
      Write-Host "OK $k"
      $ok = $true
    } catch {
      Start-Sleep -Seconds (3 * ($i + 1))
    }
  }
  if (-not $ok) { Write-Host "FAIL $k <- $($signs[$k])" }
  Start-Sleep -Milliseconds 800
}
