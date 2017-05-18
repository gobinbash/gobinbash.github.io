# Binbash.co




## Move Build to Master  (Notes)

```bash
  git commit -am "Save local changes"
  git checkout master
  git add -f build
  git commit -am "Rebuild website"
  git filter-branch -f --prune-empty --subdirectory-filter build
  git push -f origin master
  git checkout -
```